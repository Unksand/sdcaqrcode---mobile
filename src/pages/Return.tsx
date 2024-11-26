import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Return: React.FC = () => {
    const history = useHistory();

    const handleLoginRedirect = () => {
        history.push('/login'); // Change this to your actual login route
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Returning The Book</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Returning Books</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonText>
                        <h2>You need to Login to Return the Book</h2>
                    </IonText>
                    <IonButton expand="full" onClick={handleLoginRedirect}>
                        Go to Login
                    </IonButton>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Return;