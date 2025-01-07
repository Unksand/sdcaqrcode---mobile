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
    IonGrid,
    IonCol,
    IonRow,
} from '@ionic/react';
import { personCircleOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css'; // Updated CSS file
import $ from 'jquery';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const history = useHistory();

    const handleLogin = () => {
        // Email Validation: Must end with @sdca.edu.ph
        const sdcaEmailRegex = /^[a-zA-Z0-9._%+-]+@sdca\.edu\.ph$/;
        if (!sdcaEmailRegex.test(email)) {
            setAlertMessage('Please use a valid @sdca.edu.ph email address.');
            setShowAlert(true);
            return; // Stop further execution if email is invalid
        }

        // Continue with AJAX login if the email is valid
        $.ajax({
            url: "http://localhost/SDCAQrCode/index.php/Login",
            method: "POST",
            data: { email, password },
            dataType: "json",
            success: function (data) { 
                if (data.success) {
                    localStorage.setItem('user_id', data.data.id);
                    localStorage.setItem('email', data.data.email);
                    localStorage.setItem('logged_in', 'true');

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
                    <IonTitle className="ion-text-center" style={{ color: 'red' }}>Student Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonCard className="login-card">
                    <IonCardHeader>
                        <IonCardTitle className="ion-text-center">Welcome Back!</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        {/* Email Input */}
                        <IonItem className="align-items-center">
                            <IonIcon slot="start" icon={personCircleOutline} className="input-icon" />
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput
                                type='email'
                                value={email}
                                onIonChange={(e) => setEmail(e.detail.value!)}
                                className="ion-input-custom"
                                required
                            />
                        </IonItem>

                        {/* Password Input */}
                        <IonItem className="align-items-center">
                            <IonIcon slot="start" icon={lockClosedOutline} className="input-icon" />
                            <IonLabel position="stacked">Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                                className="ion-input-custom"
                                required
                            />
                        </IonItem>

                        {/* Buttons */}
                        <IonGrid>
                            <IonRow className="ion-justify-content-center ion-align-items-center">
                                <IonCol size="6" className="ion-text-center">
                                    <IonButton
                                        expand="block"
                                        onClick={handleLogin}
                                        className="login-button"
                                        shape="round"
                                    >
                                        Login
                                    </IonButton>
                                </IonCol>
                                <IonCol size="6" className="ion-text-center">
                                    <IonButton
                                        expand="block"
                                        color="secondary"
                                        onClick={handleAdminAction}
                                        className="admin-button"
                                        shape="round"
                                    >
                                        Admin Login
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                        <IonLabel className="admin-note">
                            If you are an admin, please click the admin button
                        </IonLabel>
                    </IonCardContent>
                </IonCard>

                {/* Alert Notification */}
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
