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
    IonAlert,
} from '@ionic/react';
import { personCircleOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css'; // Make sure to create this CSS file for additional styles
import $ from 'jquery';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const history = useHistory();

    const handleLogin = () => {
        $.ajax({
            url: "http://localhost/SDCAQrCode/index.php/Signup",
            method: "POST",
            data: {
                email: email,
                password: password
            },
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    setAlertMessage('Your account was signed in successfully.');
                    setShowAlert(true);
                    setTimeout(() => {
                        history.push('/folder/home');
                    }, 2000);
                } else {
                    setAlertMessage('Login failed: ' + data.message);
                    setShowAlert(true);
                }
            },
            error: function (err: JQuery.jqXHR) {
                setAlertMessage('An error occurred: ' + err.statusText);
                setShowAlert(true);
            }
        });
    };

    const handleAdminAction = () => {
        console.log('Admin button clicked');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div style={{ textAlign: 'center', color: 'Red' }}>
                        <IonTitle>Student Login</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="login-card">
                    <IonCardHeader>
                        <IonCardTitle>Welcome Back!</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonIcon slot="start" icon={personCircleOutline} />
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput
                                value={email}
                                onIonChange={e => setEmail(e.detail.value!)}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonIcon slot="start" icon={lockClosedOutline} />
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonChange={e => setPassword(e.detail.value!)}
                                required
                            />
                        </IonItem>
                        <IonButton expand="full" onClick={handleLogin}>
                            Login
                        </IonButton>

                        <div>
                            <IonButton expand="full" color="secondary" onClick={handleAdminAction} style={{ marginTop: '10px' }}>
                                Admin Login
                            </IonButton>
                            <IonLabel style={{ color: 'Black' }}>If you are an admin, please click the admin button</IonLabel>
                        </div>
                    </IonCardContent>
                </IonCard>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Notification'}
                    message={alertMessage}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default Login;