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
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const history = useHistory();

    const handleLogin = () => {
        $.ajax({
            // FOR WEBPAGE
            url: "http://localhost/SDCAQrCode/index.php/Login",
            // url: "http://192.168.120.124/SDCAQrCode/index.php/Login",
            method: "POST",
            data: {
                email: email,
                password: password
            },
            dataType: "json",
            success: function (data) { 
                if (data.success) {
                    // Store user session in localStorage (or sessionStorage)
                    localStorage.setItem('user_id', data.data.id); // Store user ID
                    localStorage.setItem('email', data.data.email); // Store username
                    localStorage.setItem('logged_in', 'true'); // Mark the user as logged in
    
                    setAlertMessage('Your account was signed in successfully.');
                    setShowAlert(true);
                    setTimeout(() => {
                        history.push('/folder/home'); // Redirect to home page
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
                    <div style={{ textAlign: 'center', color: 'red' }}>
                        <IonTitle className="ion-text-center">Student Login</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="login-card">
                    <IonCardHeader>
                        <IonCardTitle className="ion-text-center">Welcome Back!</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonIcon slot="start" icon={personCircleOutline} />
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput
                                value={email}
                                onIonChange={e => setEmail(e.detail.value!)}
                                required
                                className="ion-input-custom"
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
                                className="ion-input-custom"
                            />
                        </IonItem>

                        <IonButton expand="full" onClick={handleLogin} className="login-button">
                            Login
                        </IonButton>

                        <div>
                            <IonButton
                                expand="full"
                                color="secondary"
                                onClick={handleAdminAction}
                                style={{ marginTop: '10px' }}
                            >
                                Admin Login
                            </IonButton>
                            <IonLabel style={{ color: 'black' }}>
                                If you are an admin, please click the admin button
                            </IonLabel>
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
