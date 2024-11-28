import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonPopover,
    IonIcon,
  } from "@ionic/react";
  import { callOutline, callSharp, chevronDownOutline, locationOutline, locationSharp, mailOpenSharp, mailOutline, timeSharp } from "ionicons/icons"; // Import necessary icons
  import "./AboutPage.css";
  import { Link } from "react-router-dom";

  
  const Contact: React.FC = () => {
    
  
    return (
      <IonPage>
        <IonHeader>
        
        
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">SDCA Higher Education Library</IonTitle>
        </IonToolbar>
      </IonHeader>
       {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>CONTACT US</h1>
        </div>
      </div>

      {/* Main Content */}
      <IonContent className="ion-padding about-content">
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <div className="main-section">
              <h2 className="section-title">You can find us here</h2>
              <p>
                <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway, Bacoor City, Philippines 4102
              </p>
              <p>
                <IonIcon icon={callOutline} /> (+63) 998 551 8021
              </p>
              <p>
                <IonIcon icon={mailOpenSharp} /> dlrchelpdesk@sdca.edu.ph
              </p>
            </div>
          </IonCol>

          <IonCol size="12" sizeMd="6">
            <div className="main-section">
              <h2 className="section-title">Working Hours</h2>
              <p>
                <IonIcon icon={timeSharp} /> Monday-Friday: 8 AM - 7 PM
              </p>
              <p>
                <IonIcon icon={timeSharp} /> Saturday: 8 AM - 4 PM
              </p>
              <p>
                <IonIcon icon={timeSharp} /> Sunday: Closed
              </p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
      </IonPage>
    );
  };
  
  export default Contact;
  