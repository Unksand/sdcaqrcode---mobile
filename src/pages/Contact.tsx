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
import {
  callOutline,
  callSharp,
  chevronDownOutline,
  locationOutline,
  locationSharp,
  mailOpenSharp,
  mailOutline,
  timeSharp,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  globeOutline,
} from "ionicons/icons"; // Import necessary icons
import "./AboutPage.css";

const Contact: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">Contact Us</IonTitle>
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
        <IonGrid className="about-layout">
          <IonRow className="responsive-row">
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
                <IonRow style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <a href="https://www.facebook.com/stdominiccollege/" target="_blank">
                    <IonIcon icon={logoFacebook} style={{ fontSize: "3rem", color: "blue" }} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <IonIcon icon={logoInstagram} style={{ fontSize: "3rem", color: "yellow" }} />
                  </a>
                  <a href="https://stdominiccollege.edu.ph/" target="_blank">
                    <IonIcon icon={globeOutline} style={{ fontSize: "3rem", color: "black" }} />
                  </a>
                  <a href="https://www.youtube.com/@st.dominiccollegeofasia1851/featured" target="_blank">
                    <IonIcon icon={logoYoutube} style={{ fontSize: "3rem", color: "red" }} />
                  </a>
                </IonRow>
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