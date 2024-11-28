import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Borrow: React.FC = () => {
    const history = useHistory();

    const handleLoginRedirect = () => {
        history.push('/folder/LoginPage'); // Change this to your actual login route
    };

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar style={{color: 'danger'}}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Borrow the Book</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Borrow the Book</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonText>
                        <h2>You need to Login to Borrow the Book</h2>
                    </IonText>
                    <IonButton expand="full" onClick={handleLoginRedirect}>
                        Go to Login
                    </IonButton>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Borrow;