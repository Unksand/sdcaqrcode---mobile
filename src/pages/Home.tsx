import React, { useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonNav,
  IonTabs,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import {
  libraryOutline,
  phonePortraitOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  locationSharp,
  callSharp,
  mailSharp,
  timeSharp,
  globeOutline,
  searchCircleOutline,
} from "ionicons/icons";
import "./Home.css";

import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Log the session data to the console
    console.log("Checking session data on Home page...");
    console.log("Logged in status:", localStorage.getItem("logged_in"));
    console.log("User     ID:", localStorage.getItem("user_id"));
    console.log("Username:", localStorage.getItem("FullName"));

    // Check if the user is logged in by verifying session data in localStorage
    if (!localStorage.getItem("logged_in")) {
      // If no session data, redirect to login page
      console.log("User     is not logged in. Redirecting to login page...");
      history.push("/folder/home");
    } else {
      console.log("User     is logged in. Showing home page content...");
    }
  }, [history]);

  const handleExternalLink = (url: string) => {
    if (window.confirm("Are you sure you want to leave the app?")) {
      window.open(url, "_blank");
    }
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Navigation Bar */}
      <IonToolbar color="danger">
        <IonNav>
          <IonTabs>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="#tab1">
                <IonIcon icon={libraryOutline} />
                <span>Services</span>
              </IonTabButton>
              <IonTabButton tab="tab2" href="#tab2">
                <IonIcon icon={phonePortraitOutline} />
                <span>Contact Us</span>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonNav>
      </IonToolbar>

      {/* Content */}
      <IonContent className="ion-padding">
        <div className="hero-section">
          <img
            src="https://storage.googleapis.com/bukas-website-v3-prd/website_v3/images/Bukas_x_SDCA_Article_Image.original.png"
            alt="Hero Banner"
            className="hero-img"
          />
          <h2 className="Title">Welcome to the SDCA Library</h2>
          <p>
            Access a wealth of knowledge and resources to shape your future.
            Explore our services and programs today!
          </p>
          <IonButton
            routerLink="/folder/About"
            color="danger"
            className="learn-more-btn"
          >
            About Us
          </IonButton>
          <IonButton
            routerLink="/folder/Contact"
            color="danger"
            className="learn-more-btn"
          >
            Contact Us
          </IonButton>
        </div>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonButton
                fill="outline"
                routerLink="/folder/Borrow"
                className="center-content"
              >
                <IonIcon icon={libraryOutline} slot="start" />
                Borrow Books
              </IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton
                fill="outline"
                routerLink="/folder/Booksearch"
                className="center-content"
              >
                <IonIcon icon={searchCircleOutline} slot="start" />
                Book Search
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="footer-content">
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <p>
                  <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway,
                  Bacoor City, Philippines 4102
                </p>
                <p>
                  <IonIcon icon={callSharp} /> (+63) 998 551 8021
                </p>
                <p>
                  <IonIcon icon={mailSharp} /> dlrchelpdesk@sdca.edu.ph
                </p>
              </IonCol>
              <IonCol size="4">
                <p>
                  <IonIcon icon={timeSharp} /> Monday-Friday: 8 AM - 7 PM
                </p>
                <p>
                  <IonIcon icon={timeSharp} /> Saturday: 8 AM - 4 PM
                </p>
                <p>
                  <IonIcon icon={timeSharp} /> Sunday: Closed
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonRow
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <a
              onClick={() =>
                handleExternalLink("https://www.facebook.com/stdominiccollege/")
              }
            >
              <IonIcon
                icon={logoFacebook}
                style={{ fontSize: "3rem", color: "blue" }}
              />
            </a>
            <a onClick={() => handleExternalLink("https://www.instagram.com")}>
              <IonIcon
                icon={logoInstagram}
                style={{ fontSize: "3rem", color: "yellow" }}
              />
            </a>
            <a
              onClick={() =>
                handleExternalLink("https://stdominiccollege.edu.ph/")
              }
            >
              <IonIcon
                icon={globeOutline}
                style={{ fontSize: "3rem", color: "black" }}
              />
            </a>
            <a
              onClick={() =>
                handleExternalLink(
                  "https://www.youtube.com/@st.dominiccollegeofasia1851/featured"
                )
              }
            >
              <IonIcon
                icon={logoYoutube}
                style={{ fontSize: "3rem", color: "red" }}
              />
            </a>
          </IonRow>
        </div>
      </IonContent>

      {/* Footer */}
      {/* <IonFooter className="footer">
        
      </IonFooter> */}
    </IonPage>
  );
};

export default Home;
