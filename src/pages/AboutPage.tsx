import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">About Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Navigation Bar */}
      <IonToolbar color="danger">
        <IonGrid>
          <IonRow>
            
          </IonRow>
        </IonGrid>
      </IonToolbar>

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <IonContent className="ion-padding about-content">
        <div className="centered-content">
          <IonGrid className="about-layout">
            <IonRow className="responsive-row">
              <IonCol size="12" size-md="8">
                {/* Main Section */}
                <div className="main-section">
                  <h2 className="section-title">OUR STORY</h2>
                  <IonCol size="12" size-md="5" className="image-col">
                    <div className="image-container">
                      <img src="https://stdominiccollege.edu.ph/images/andaman-family.png" alt="Founders and family" className="about-image" />
                      <p className="image-caption">Founders Dominga & Gregorio with their children, now SDCA board directors.</p>
                    </div>
                  </IonCol>
                  <p>
                    The story of St. Dominic College of Asia (SDCA) is a shining example of what a dedicated family is capable of achieving through perseverance, hardwork and cooperation. The College traces its roots with the establishment of the St. Dominic Medical Center (SDMC) in 1992 by founders Don Gregorio and Dona Dominga Andaman. Named in honor of Dominga, the SDMC has proven itself capable of meeting the medical demands of the community with its modern facilities and excellent services.
                    In 2003, 12 years after the realization of the dream hospital in Cavite, St. Dominic College of Arts & Sciences was founded. The College is the family’s gift to the community and the manifestation of their commitment to provide excellent but affordable education in Bacoor and neighboring communities.
                    Initially offering programs in Caregiving and BS Nursing in collaboration with the SDMC, St. Dominic has evolved into a full-fledged collegiate institution with fourt schools: School of Health Science Professions (SHSP), School of Arts, Sciences, Criminology & Education (SASCE), School of International Hospitality & Tourism Management (SIHTM), and School of Business & Computer Studies (SBCS).
                  </p>
                </div>

                <div className="main-section quote-section">
                  <h2>"Your Vision of the future, is our Mission today."</h2>
                    <div className="image-container">
                      <img src="https://stdominiccollege.edu.ph/images/graduate.jpg" alt="Grad pic" className="about-image" />
                    </div>
                </div>

                <div className="main-section">
                  <h2 className="section-title">OUR MISSION</h2>
                  <p>
                    To revolutionize education by purposively linking quality of education, training, and research with community service in pursuing the holistic development of individuals through innovative programs and productive activities attuned to local and global demands.
                  </p>
                </div>

                <div className="main-section">
                  <h2 className="section-title">OUR VISION</h2>
                  <p>
                    "A dynamic and proactive university in Asia dedicated to excellence in providing learner-centered education, research, and sustainable community service towards the attainment of a better quality of life."
                  </p>
                </div>

                <div className="main-section">
                  <h2 className="section-title">GOALS</h2>
                  <ul>
                    <li>To produce holistic graduates equipped with an international mindset and global competencies.</li>
                    <li>To actively promote research and foster the utilization of emerging technologies for personal and professional development.</li>
                    <li>To take a leadership role in addressing community concerns, thereby improving the overall quality of life.</li>
                    <li>To integrate the UNESCO Sustainable Development Goals into institutional programs and activities, supporting a sustainable future for all.</li>
                  </ul>
                </div>

                <div className="main-section">
                  <h2 className="section-title">CORE VALUES</h2>
                  <ul>
                    <li>Service</li>
                    <li>Dynamism</li>
                    <li>Competence</li>
                    <li>Accountability</li>
                  </ul>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        {showScrollButton && (
          <IonButtons className="back-to-top" onClick={handleScrollToTop}>
            Back to Top
          </IonButtons>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;