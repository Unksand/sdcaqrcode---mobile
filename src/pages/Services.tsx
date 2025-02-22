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
  import { chevronDownOutline } from "ionicons/icons"; // Import necessary icons
  import "./AboutPage.css";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  const Services: React.FC = () => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showGovDropdown, setShowGovDropdown] = useState(false);
  
    return (
      <IonPage>
        {/* Header */}
        <IonHeader>
          <IonToolbar color="danger">
            <IonButtons slot="start">
              <IonMenuButton />
              <IonTitle className="header-text">
                      Services
              </IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  
        {/* Banner */}
        <div className="banner">
          <div className="banner-overlay">
            <h1>SERVICES</h1>
          </div>
        </div>
  
        {/* Main Content */}
        <IonContent className="ion-padding about-content">
          <div className="about-layout">
            {/* Main Section */}
            <div className="main-section">
              <h2 className="section-title">BRIEF HISTORY</h2>
              <p>
                The story of St. Dominic College of Asia (SDCA) is a shining
                example of what a dedicated family is capable of achieving through
                perseverance, hardwork and cooperation. The College traces its
                roots with the establishment of the St. Dominic Medical Center
                (SDMC) in 1992 by founders Don Gregorio and Dona Dominga Andaman.
                Named in honor of Dominga, the SDMC has proven itself capable of
                meeting the medical demands of the community with its modern
                facilities and excellent services.
              </p>
            </div>
  
            <div className="main-section">
              <h2 className="section-title">Library Administrators</h2>
              <ul className="library-admin-list">
                <li>
                  <strong>Name</strong>
                  <br />
                  Position
                </li>
                <br />
                <li>
                  <strong>Name</strong>
                  <br />
                  Position
                </li>
                <br />
                <li>
                  <strong>Name </strong>
                  <br />
                  Position
                </li>
                <br />
                <li>
                  <strong>Name</strong>
                  <br />
                  Position
                </li>
              </ul>
            </div>
  
            {/* Sidebar */}
            <div className="sidebar">
              <h3>ABOUT ST DOMINIC</h3>
              <ul>
                <li>
                  <Link to="/folder/Welcome!">Home</Link>
                </li>
                <li>
                  <Link to="/vision-mission">Vision - Mission</Link>
                </li>
                <li>
                  <Link to="/folder/Contact Us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Services;
  