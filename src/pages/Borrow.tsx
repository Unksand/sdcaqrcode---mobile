import React, { useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButtons,
  IonMenuButton,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Borrow: React.FC = () => {
  const history = useHistory();

  // Function to check login status
  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem('logged_in');
    if (loggedIn === 'true') {
      // If user is logged in, reload the page to initiate the other function
      if (history.location.pathname !== '/folder/homes') {
        history.replace('/folder/homes');
        // Reload the page after navigation
        window.location.reload();
      }
    }
  };

  // Monitor history changes with useEffect
  useEffect(() => {
    checkLoginStatus();

    // React to changes in history
    const unlisten = history.listen(() => {
      checkLoginStatus();
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const handleLoginRedirect = () => {
    history.push('/folder/LoginPage');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ color: 'danger' }}>
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
