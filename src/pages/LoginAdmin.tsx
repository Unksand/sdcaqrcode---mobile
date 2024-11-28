import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
} from '@ionic/react';
import { personCircleOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css'; // Make sure to create this CSS file for additional styles

const AdminLogin = () => {
    const [adminEmail, setAdminEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // Handle admin login logic here
        console.log('Admin Email:', adminEmail);
        console.log('Password:', password);
        // Implement your authentication logic here
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div style={{ textAlign: 'center', color: 'Red' }}>
                        <IonTitle>Admin Login</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="login-card">
                    <IonCardHeader>
                        {/* Centering the image */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img 
                                src="https://stdominiccollege.edu.ph/WEBDOSE/plugins/login_asset/img/sdcalogo.png" // Replace with your image URL
                                alt="Admin Logo" 
                                style={{ width: '30%', height: 'auto', borderRadius: '8px' }} // Adjust styles as needed
                            />
                        </div>
                        <IonCardTitle style={{ textAlign: 'center' }}>Welcome Admin!</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonIcon slot="start" icon={personCircleOutline} />
                            <IonLabel position="floating">Admin Email</IonLabel>
                            <IonInput
                                value={adminEmail}
                                onIonChange={e => setAdminEmail(e.detail.value!)} // Update the state on change
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonIcon slot="start" icon={lockClosedOutline} />
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonChange={e => setPassword(e.detail.value!)} // Update the state on change
                                required
                            />
                        </IonItem>
                        <IonButton expand="full" onClick={handleLogin}>
                            Login
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default AdminLogin;