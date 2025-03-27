import React, { useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonText,
} from "@ionic/react";
import { libraryOutline, logInOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./Borrow.css";

const Borrow: React.FC = () => {
  const history = useHistory();

  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem("logged_in");
    if (loggedIn === "true") {
      if (history.location.pathname !== "/folder/Borrow2") {
        history.replace("/folder/Borrow2");
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    checkLoginStatus();
    const unlisten = history.listen(() => {
      checkLoginStatus();
    });
    return () => {
      unlisten();
    };
  }, [history]);

  const handleLoginRedirect = () => {
    history.push("/folder/LoginPage");
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">Borrow Book</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding borrow-content">
        <div className="borrow-card">
          <IonIcon icon={libraryOutline} className="borrow-icon" />
          <h2 className="borrow-title">Borrow a Book</h2>
          <IonText>
            <p>You need to log in to borrow a book.</p>
          </IonText>
          <IonButton
            expand="full"
            onClick={handleLoginRedirect}
            className="login-btn"
          >
            <IonIcon icon={logInOutline} slot="start" /> Go to Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Borrow;
