import React, { useState, useEffect } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonLoading,
    IonToast,
} from '@ionic/react';

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<any>(null);
    const [settings, setSettings] = useState({ email: '', name: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const fetchProfile = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://your-codeigniter-backend.com/api/profile');
            if (!response.ok) {
                throw new Error('Failed to fetch profile');
            }
            const data = await response.json();
            setProfile(data);
            setSettings({ email: data.email, name: data.name });
        } catch (error) {
            setToastMessage('Failed to load profile');
        } finally {
            setIsLoading(false);
        }
    };

    const updateSettings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://your-codeigniter-backend.com/api/update_profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
            });
            if (!response.ok) {
                throw new Error('Failed to update settings');
            }
            const data = await response.json();
            setToastMessage(data.message || 'Settings updated successfully');
        } catch (error) {
            setToastMessage('Failed to update settings');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {isLoading && <IonLoading isOpen={isLoading} message="Please wait..." />}
                <IonToast
                    isOpen={!!toastMessage}
                    message={toastMessage}
                    duration={2000}
                    onDidDismiss={() => setToastMessage('')}
                />
                {profile && (
                    <IonList>
                        <IonItem>
                            <IonLabel>Name</IonLabel>
                            <IonInput
                                value={settings.name}
                                onIonChange={(e) => setSettings({ ...settings, name: e.detail.value! })}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Email</IonLabel>
                            <IonInput
                                value={settings.email}
                                onIonChange={(e) => setSettings({ ...settings, email: e.detail.value! })}
                            />
                        </IonItem>
                    </IonList>
                )}
                <IonButton expand="block" onClick={updateSettings}>
                    Save Settings
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Profile;