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

const Login = () => {
    const [studentNumber, setStudentNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Student Number:', studentNumber);
        console.log('Password:', password);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div style={{textAlign: 'center', color: 'Red '}}>
                        <IonTitle >Student Login</IonTitle>

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
                            <IonLabel position="floating">Student Number</IonLabel>
                            <IonInput
                                value={studentNumber}
                                // onIonChange={e => setStudentNumber(e.target.value)} // Fallback to empty string
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonIcon slot="start" icon={lockClosedOutline} />
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                // onIonChange={e => setPassword(e.target.value)} // Fallback to empty string
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

export default Login;