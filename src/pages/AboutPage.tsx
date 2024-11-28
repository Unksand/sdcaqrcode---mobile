import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './AboutPage.css';
import { Link } from 'react-router-dom';


const AboutPage: React.FC = () => {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
          {/* Banner */}
        <div className="banner">
          <div className="banner-overlay">
            <h1>ABOUT US</h1>
          </div>
        </div>

        <IonContent className="ion-padding about-content">
        

        <IonGrid className="about-layout">
          <IonRow>
            <IonCol size="12" size-md="8">
              {/* Main Section */}
              <div className="main-section">
                <h2 className="section-title">BRIEF HISTORY</h2>
                <p>
                  The story of St. Dominic College of Asia (SDCA) is a shining
                  example of what a dedicated family is capable of achieving through
                  perseverance, hard work, and cooperation. The College traces its
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
                </ul>
              </div>
            </IonCol>

            {/* Sidebar */}
            <IonCol size="12" size-md="4">
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      </IonPage>

    );
};
export default AboutPage;

