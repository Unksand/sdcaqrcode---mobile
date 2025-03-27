import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonFab,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { arrowUpCircleOutline, chevronDownOutline } from "ionicons/icons";

const AboutPage: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const contentRef = useRef<HTMLIonContentElement>(null);

  const handleScrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(500); // Add a duration to the scroll animation
    }
  };

  const [dropdowns, setDropdowns] = useState({
    policies: false,
  });

  const facultyMembers = [
    {
      name: "Laila Ariate",
      position: "Head Librarian",
      image:
        "https://www.stdominiccollege.edu.ph/images/DLRC%20STAFF/ARIATE,%20LAILA0182001.jpg",
    },
    {
      name: "Jerica Dioneda",
      position: "Assistant Librarian",
      image:
        "https://www.stdominiccollege.edu.ph/images/DIONEDA,%20JERICA0188031.jpg",
    },
    {
      name: "Cathryn Ann Dimapilis",
      position: "Library Staff",
      image:
        "https://www.stdominiccollege.edu.ph/images/DIMAPILIS,%20CATHRYN%20ANN0187901.jpg",
    },
    {
      name: "Edwin Abaigar",
      position: "Library Assistant",
      image: "https://www.stdominiccollege.edu.ph/images/ABAIGAR,%20EDWIN.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showFaculty, setShowFaculty] = useState(false);

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

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <IonContent ref={contentRef} className="ion-padding about-content">
        <div className="centered-content">
          <IonGrid className="about-layout">
            <IonRow className="responsive-row">
              <IonCol size="12" size-md="8">
                {/* Table of Contents */}
                <div className="main-section">
                  <h2 className="section-title">TABLE OF CONTENTS</h2>
                  <IonList>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#our-mission"
                          onClick={(e) => {
                            e.preventDefault();
                            const missionSection = document.getElementById("our-mission");
                            if (missionSection) {
                              missionSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Our Mission
                        </a>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#our-vision"
                          onClick={(e) => {
                            e.preventDefault();
                            const visionSection = document.getElementById("our-vision");
                            if (visionSection) {
                              visionSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Our Vision
                        </a>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#objectives"
                          onClick={(e) => {
                            e.preventDefault();
                            const objectivesSection = document.getElementById("objectives");
                            if (objectivesSection) {
                              objectivesSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Objectives
                        </a>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#faculty-members"
                          onClick={(e) => {
                            e.preventDefault();
                            const facultyMembersSection = document.getElementById("faculty-members");
                            if (facultyMembersSection) {
                              facultyMembersSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Faculty Members
                        </a>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#dlrc-policies"
                          onClick={(e) => {
                            e.preventDefault();
                            const dlrcPoliciesSection = document.getElementById("dlrc-policies");
                            if (dlrcPoliciesSection) {
                              dlrcPoliciesSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          DLRC Policies
                        </a>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </div>
                {/* Main Section */}
                <div className="main-section">
                  <h2 className="section-title" id="our-mission">
                    OUR MISSION
                  </h2>
                  <p style={{ textAlign: "center" }}>
                    We are committed to excellence and innovation in providing
                    equitable access to information by continuosly acquiring
                    world class library resources in support of quality
                    education, training, research, and community service of the
                    College.
                  </p>
                </div>
                <div className="main-section">
                  <h2 className="section-title" id="our-vision">
                    OUR VISION
                  </h2>
                  <p style={{ textAlign: "center" }}>
                    To become the most dynamic library in Asia.
                  </p>
                </div>
                <div style={{ height: 20 }}></div>{" "}
                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title" id="objectives">
                    OUR OBJECTIVES:
                  </h2>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      Provide access to a wide range of materials that support
                      quality education, training, research, and community
                      service of the College.
                    </li>
                    <li>
                      Deploy and improve information technologies to support the
                      stakeholders.
                    </li>
                    <li>
                      Encourage and provide on-going development opportunities
                      for library staff.
                    </li>
                    <li>
                      Engage partnerships with other units and agencies to
                      pursue organizational effectiveness.
                    </li>
                  </ul>
                </div>
                <div style={{ height: 20 }}></div>{" "}
                <div className="main-section">
                  <h2 className="section-title" id="faculty-members">
                    OUR FACULTY
                  </h2>
                  <IonButton
                    onClick={() => setShowFaculty(!showFaculty)}
                    expand="block"
                  >
                    {showFaculty ? "Hide Faculty" : "Show Faculty"}
                  </IonButton>
                  {showFaculty && (
                    <IonGrid>
                      <IonRow>
                        {facultyMembers.map((faculty, index) => (
                          <IonCol
                            key={index}
                            size="12"
                            size-sm="6"
                            size-md="3"
                            className="faculty-card"
                          >
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="faculty-image"
                            />
                            <p className="faculty-name">{faculty.name}</p>
                            <p className="faculty-position">
                              {faculty.position}
                            </p>
                          </IonCol>
                        ))}
                      </IonRow>
                    </IonGrid>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}
                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title" id="dlrc-policies">
                    DLRC Policies
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        policies: !dropdowns.policies,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.policies ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.policies ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.policies && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          CONDUCT OF LIBRARY USERS
                        </span>
                        <br />- All library users should follow the instructions
                        on the proper use of the Library as displayed in the
                        Library or given verbally by the Library staff.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          STUDENTS, FACULTY AND OTHER RESEARCHERS
                        </span>
                        <br />- All students who are currently enrolled in, and
                        Faculty members who are renewed and hired by the
                        institution are required to personally apply the free
                        membership at the DLRC to avail of the various library
                        services.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          BOOKS AND NON-BOOK COLLECTIONS
                        </span>
                        <br />- General Reference books and periodicals are not
                        to be taken out from DLRC but can be photocopied. Books
                        for classroom demonstration may be arranged with the
                        librarian.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          LOST OR DAMAGED BOOKS
                        </span>
                        <br />- Lost or damaged books must be reported
                        immediately to DLRC staff. This book must be replaced
                        with the same title, author and edition of books. In
                        case of older edition books can preferably replaced with
                        the newest edition.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>RESERVED BOOKS</span>
                        <br />- Reserved books can be borrowed for a period of
                        two (2) days.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>SILENCE </span>
                        <br />- SILENCE must always be observed while inside the
                        DLRC. Students who are noisy will be requested to step
                        out of the DLRC.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>ELECTRONIC GADGETS</span>
                        <br />- Electronic gadgets must be turned off or
                        switched to silent mode while inside the DLRC premises.
                        It is also prohibited to use the power outlet of the
                        library for charging CP and Laptop.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>CLEANLINESS</span>
                        <br />- Always keep the DLRC clean and orderly.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>VANDALISM</span>
                        <br />- Vandalism of any form will be dealt with
                        strongly and accordingly.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          SMOKING, EATING AND DRINKING
                        </span>
                        <br />- Smoking, eating and drinking inside the DLRC are
                        strictly prohibited.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>BOOK HANDLING</span>
                        <br />- Books must be returned properly. Handle books
                        and other reading materials with care.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          STUDENT AFFAIRS AND SERVICES (DSAS)
                        </span>
                        <br />- Students should not commit acts such as hiding
                        or stealing books or other library property. Tearing out
                        pages of books or periodicals and forging signatures are
                        subject to suspension of DLRC privileges. More serious
                        misdemeanors shall be dealt with by the Student Affairs
                        and Services (DSAS).
                      </p>
                    </div>
                  )}
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonButton onClick={handleScrollToTop} color="primary" shape="round">
            <IonIcon icon={arrowUpCircleOutline} />
          </IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;