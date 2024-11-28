import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  
  const Government: React.FC = () => {
    return (
      <IonPage>
        
        <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">Government
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="ion-padding">
          <h2>Government Offices</h2>
          <p>Official directories</p>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Government;
  