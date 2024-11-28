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
          <IonToolbar className="navbar" color="danger">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton fill="clear" routerLink="/folder/Welcome!">
                    Home
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton fill="clear" routerLink="/folder/About">
                    About Us
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton fill="clear" routerLink="/folder/Contact Us">
                    Contact Us
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton
                    fill="clear"
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  >
                    Services <IonIcon icon={chevronDownOutline} />
                  </IonButton>
                  {showServicesDropdown && (
                    <IonPopover isOpen={showServicesDropdown}>
                      <div className="dropdown-menu">
                        <IonButton fill="clear" routerLink="/folder/Services">
                          Our Services
                        </IonButton>
                        <IonButton fill="clear" routerLink="/services/borrow">
                          Borrow & Return Books
                        </IonButton>
                        <IonButton fill="clear" routerLink="/services/e-journals">
                          E-Journals
                        </IonButton>
                        <IonButton
                          fill="clear"
                          routerLink="/services/research-assistance"
                        >
                          Research Assistance
                        </IonButton>
                      </div>
                    </IonPopover>
                  )}
                </IonCol>
                <IonCol>
                  <IonButton
                    fill="clear"
                    onClick={() => setShowGovDropdown(!showGovDropdown)}
                  >
                    Government Officers <IonIcon icon={chevronDownOutline} />
                  </IonButton>
                  {showGovDropdown && (
                    <IonPopover isOpen={showGovDropdown}>
                      <div className="dropdown-menu">
                        <IonButton
                          fill="clear"
                          routerLink="/gov-officers/department1"
                        >
                          Department 1
                        </IonButton>
                        <IonButton
                          fill="clear"
                          routerLink="/gov-officers/department2"
                        >
                          Department 2
                        </IonButton>
                        <IonButton
                          fill="clear"
                          routerLink="/gov-officers/department3"
                        >
                          Department 3
                        </IonButton>
                      </div>
                    </IonPopover>
                  )}
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
  
        {/* Banner */}
        <div className="banner">
          <div className="banner-overlay">
            <h1>ABOUT US</h1>
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
  