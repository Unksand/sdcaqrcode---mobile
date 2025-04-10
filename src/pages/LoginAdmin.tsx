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
import { useHistory } from 'react-router-dom';
import $ from 'jquery'; // Ensure jQuery is installed and imported

const AdminLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const history = useHistory();

    const handleLogin = () => {
        // Validate email format (optional)
        const adminEmailRegex = /^[a-zA-Z0-9._%+-]+@sdca\.edu\.ph$/;
        if (!adminEmailRegex.test(email)) {
            console.error('Invalid email format:', email); // Debugging: Log invalid email
            setAlertMessage('Please use a valid @sdca.edu.ph email address.');
            setShowAlert(true);
            return;
        }
    
        console.log('Attempting admin login with email:', email); // Debugging: Log email before AJAX call
    
        // Perform AJAX request
        $.ajax({
            url: 'http://localhost/login/index.php/MobileAdminAuthLogin/ajax_login',
            method: 'POST',
            // contentType: 'application/json',
            // data: JSON.stringify({ email, password }),
            data: { email, password },
            dataType: 'json',
            success: function (data) {
                
                console.log('API response data:', data); // Debugging: Log response data
            
                if  (data.success === true || data.success === 'true') {
                    console.log('Admin login successful. Admin data:', data.data); // Debugging: Log admin data
                    // localStorage.setItem('id', data.data.id);
                    localStorage.setItem('email', data.data.email);
                    // localStorage.setItem('Name', data.data.name);
                    localStorage.setItem('admin_logged_in', 'true');
            
                    setAlertMessage('Admin login successful!');
                    setShowAlert(true);
                    // Redirect to admin dashboard after a short delay
                    setTimeout(() => {
                        history.push('/folder/home');
                    }, 2000);
                } else {
                    console.error('Login failed. API message:', data.message); // Debugging: Log failure message
                    setAlertMessage('Login failed: ' + data.message);
                    setShowAlert(true);
                }
            },
            error: function (err: JQuery.jqXHR) {
                console.error('Error during admin login:', err); // Debugging: Log error details
                setAlertMessage('An error occurred: ' + err.statusText);
                setShowAlert(true);
            },
        });
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
                                type='email'
                                value={email}
                                onIonChange={e => setEmail(e.detail.value!)} // Update the state on change
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

export default AdminLogin;