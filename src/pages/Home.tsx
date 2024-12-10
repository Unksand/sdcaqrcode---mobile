import React, { useEffect } from 'react';
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
} from "ionicons/icons";
import "./Home.css";

import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {


  const history = useHistory();

    useEffect(() => {
        // Log the session data to the console
        console.log('Checking session data on Home page...');
        console.log('Logged in status:', localStorage.getItem('logged_in'));
        console.log('User ID:', localStorage.getItem('user_id'));
        console.log('Username:', localStorage.getItem('email'));

        // Check if the user is logged in by verifying session data in localStorage
        if (!localStorage.getItem('logged_in')) {
            // If no session data, redirect to login page
            console.log('User is not logged in. Redirecting to login page...');
            history.push('/folder/home');
        } else {
            console.log('User is logged in. Showing home page content...');
        }
    }, [history]);
    
    return (
      <IonPage>
        {/* Header */}
        <IonHeader>
          <IonToolbar color="danger">
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonTitle className="header-text">SDCA Higher Education Library</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Content */}
        <IonContent className="ion-padding">
          <div className="hero-section">
            <img
              src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/330769174_756905462227745_8325955663905732567_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=D65PBQ8wWNUQ7kNvgE7_Sbk&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AssFtMbefWjG9shzXe3EjiT&oh=00_AYBWfqTj5EfGU0Pw7y2zQd62RvP8OilDmEToxqPVs8XljA&oe=6741F9A2"
              alt="Hero Banner"
              className="hero-img"
            />
            <h2>Welcome to the SDCA Library</h2>
            <p>
              Access a wealth of knowledge and resources to shape your future. Explore our services and programs today!
            </p>
            <IonButton routerLink="/folder/About" color="danger">
              Learn More
            </IonButton>
          </div>

          <div className="center-content">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton fill="outline" routerLink="/folder/services">
                    <IonIcon icon={libraryOutline} slot="start" />
                    Explore Services
                  </IonButton>
                </IonCol>
                <IonCol>
                  
                  <IonButton fill="outline" routerLink="/folder/About">
                    <IonIcon icon={phonePortraitOutline} slot="start" />
                    Contact Us
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <div className="footer-content">
              <IonGrid>
                <IonRow>
                  <IonCol size="5">
                    <p>
                      <IonIcon icon={locationSharp} /> Emilio Aguinaldo Highway, Bacoor City, Philippines 4102
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
                <IonRow  style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <IonButton fill="clear" color="primary" size="small">
                    <IonIcon icon={logoFacebook} />
                  </IonButton>
                  <IonButton fill="clear" color="warning" size="small">
                    <IonIcon icon={logoInstagram } />
                  </IonButton>
                  <IonButton fill="clear" color="primary" size="small">
                    <IonIcon icon={logoTwitter} />
                  </IonButton>
                  <IonButton fill="clear" color="danger" size="small">
                    <IonIcon icon={logoYoutube} />
                  </IonButton>
                </IonRow>
            </div>
            
          </div>
        </IonContent>

        {/* Footer
        <IonFooter className="footer">
          
        </IonFooter> */}
      </IonPage>
    );
};

export default Home;