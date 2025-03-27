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
import "./Contact.css";

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
      <IonContent className="ion-padding about-content centered-content">
        <IonGrid className="about-layout">
          <IonRow className="responsive-row">
            <IonCol size="12" sizeMd="6">
              <div className="main-section">
                <h2 className="section-title">You can find us here:</h2>
                <p>
                  <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway,
                  Bacoor City, Philippines 4102
                </p>
                <p>
                  <IonIcon icon={mailOpenSharp} />
                  <a href="mailto:dlrchelpdesk@sdca.edu.ph" target="_blank">
                    dlrchelpdesk@sdca.edu.ph
                  </a>
                </p>
                <p>
                  <IonIcon icon={globeOutline} /> 
                  Our social media platforms:
                </p>
                <IonRow
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <a
                    href="https://www.facebook.com/sdcaheudlrc"
                    target="_blank"
                  >
                    <IonIcon
                      icon={logoFacebook}
                      style={{ fontSize: "3rem", color: "blue" }}
                    />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <IonIcon
                      icon={logoInstagram}
                      style={{ fontSize: "3rem", color: "yellow" }}
                    />
                  </a>
                  <a href="https://stdominiccollege.edu.ph/" target="_blank">
                    <IonIcon
                      icon={globeOutline}
                      style={{ fontSize: "3rem", color: "black" }}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@st.dominiccollegeofasia1851/featured"
                    target="_blank"
                  >
                    <IonIcon
                      icon={logoYoutube}
                      style={{ fontSize: "3rem", color: "red" }}
                    />
                  </a>
                </IonRow>
              </div>
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <div className="main-section">
                <h2 className="section-title">Working Hours</h2>
                <p>
                  <IonIcon icon={timeSharp} /> MONDAY AND SATURDAY: 8:00 AM - 5:00 PM
                </p>
                <p>
                  <IonIcon icon={timeSharp} /> TUESDAY TO FRIDAY: 7:00 AM - 7:00 PM
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