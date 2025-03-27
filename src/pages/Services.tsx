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
  IonItem,
  IonLabel,
  IonList,
  IonFab,
} from "@ionic/react";
import { arrowUpCircleOutline, chevronDownOutline } from "ionicons/icons"; // Import necessary icons
import "./Services.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Services: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const contentRef = useRef<HTMLIonContentElement>(null);

  const handleScrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(500); // Add a duration to the scroll animation
    }
  };

  const [dropdowns, setDropdowns] = useState({
    research: false,
    gov: false,
    multicultural: false,
    understanding: false,
    selfDirected: false,
    information: false,
    critical: false,
    communication: false,
    creativity: false,
    collaboration: false,
  });

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-text">Services</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <h1>DLRC Services</h1>
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
                          href="#library-services"
                          onClick={(e) => {
                            e.preventDefault();
                            const libraryServicesSection =
                              document.getElementById("library-services");
                            if (libraryServicesSection) {
                              libraryServicesSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Library Services
                        </a>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <a
                          href="#facilities"
                          onClick={(e) => {
                            e.preventDefault();
                            const facilitiesSection =
                              document.getElementById("facilities");
                            if (facilitiesSection) {
                              facilitiesSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          Facilities
                        </a>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </div>

                {/* Main Section */}
                <div className="main-section">
                  <h2 className="section-title" id="library-services">
                    Research and Product Development
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        research: !dropdowns.research,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.research ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.research ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.research && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          Bibliographic Searching
                        </span>
                        <br />- Use of OPAC (Online Public Access Catalog) in
                        searching for library collection.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Indexing Service</span>
                        <br />- Bibliographic access of journal articles though
                        the use of the OPAC.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Internet/Computer Service
                        </span>
                        <br />- Use of the computer and internet access for
                        academic purposes.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Reference Service </span>
                        <br />- A library service that provides the library
                        users with direction to library materials, advice on
                        library collections, services and expertise on multiple
                        kinds of information sources.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Thesis Collection</span>
                        <br />- Access of SDCA students’ theses in print format.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Vertical File Collection
                        </span>
                        <br />- Access of clippings of newspaper articles in
                        various subject areas.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}
                
                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">
                    Moral and Spiritual Accountability
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({ ...dropdowns, gov: !dropdowns.gov })
                    }
                    expand="block"
                  >
                    {dropdowns.gov ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.gov ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.gov && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>Book Therapy</span>
                        <br />- Access of inspirational and motivational books
                        for personal development.
                      </p>
                    </div>
                  )}
                </div>
                <div className="main-section">
                  <h2 className="section-title">Multicultural Advocacy</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        multicultural: !dropdowns.multicultural,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.multicultural ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={
                          dropdowns.multicultural ? "rotated-icon" : ""
                        }
                      />
                    )}
                  </IonButton>
                  {dropdowns.multicultural && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          One Asia Collection
                        </span>
                        <br />- These is publications dealing with the Asia in
                        whatever language and place it were published. These
                        materials are required for studying the Asia as the name
                        of the college suggests.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Language Learning Nook
                        </span>
                        <br />- Access of audio files for basic learning of the
                        different languages.
                      </p>
                    </div>
                  )}
                </div>
                <div className="main-section">
                  <h2 className="section-title">
                    Understanding the Discipline
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        understanding: !dropdowns.understanding,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.understanding ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={
                          dropdowns.understanding ? "rotated-icon" : ""
                        }
                      />
                    )}
                  </IonButton>
                  {dropdowns.understanding && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          Bibliographic Searching
                        </span>
                        <br />- Use of OPAC (Online Public Access Catalog) in
                        searching for library collection.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Pathfinder</span>
                        <br />- Access of the compilation of bibliographies of
                        the available references in the library of the specific
                        terms in various subject areas.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Theses Collection</span>
                        <br />- Access of SDCA students’ theses in print format.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Vertical File Collection{" "}
                        </span>
                        <br />- Access of clippings of newspaper articles in
                        various subject areas.
                      </p>
                    </div>
                  )}
                </div>
                <div className="main-section">
                  <h2 className="section-title">Self Directed Learning</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        selfDirected: !dropdowns.selfDirected,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.selfDirected ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.selfDirected ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.selfDirected && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>Borrowing Service</span>
                        <br />- A service that allows students, faculty, and
                        staff to borrow library materials for a certain period
                        of time.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Current Awareness Service
                        </span>
                        <br />- A library service that provides up-to-date
                        information related to: Current Events, Newspaper
                        Subscriptions, Subject Specific updates,
                        Periodical/Journal Subscriptions.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          E-Books/e-Audiobooks Kiosk
                        </span>
                        <br />- A section of the DLRC that promotes reading
                        through digital and audio format books using tablets
                        provided in the Kiosk.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Library Instruction
                        </span>
                        <br />- A library orientation on the use of the library
                        and its services for new students, faculty, and staff.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Pathfinder</span>
                        <br />- Access to the compilation of bibliographies of
                        available references in the library for specific terms
                        in various subject areas.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">
                    Information and Technology Literacy
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        information: !dropdowns.information,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.information ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.information ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.information && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          Bibliographic Searching
                        </span>
                        <br />- Use of OPAC (Online Public Access Catalog) in
                        searching for library collection.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Indexing Service</span>
                        <br />- Bibliographic access of journal articles through
                        the use of the OPAC.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Electronic Resources Collection
                        </span>
                        <br />- Access to STARBOOKS, Electronic Books, Theses,
                        and DVD collections.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Internet/Computer Service
                        </span>
                        <br />- A library orientation on the use of the library
                        and its services for new students, faculty, and staff.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Dominican Online Reference Assistant (DORA)
                        </span>
                        <br />- A virtual reference assistant that provides
                        instant answers on queries about access and retrieval of
                        information.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">Critical Thinking</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        critical: !dropdowns.critical,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.critical ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.critical ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.critical && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          Bibliographic Searching
                        </span>
                        <br />- Use of OPAC (Online Public Access Catalog) in
                        searching for library collection.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Indexing Service</span>
                        <br />- Bibliographic access of journal articles through
                        the use of the OPAC.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Library Instruction
                        </span>
                        <br />- A library orientation on the use of the library
                        and its services for new students, faculty, and staff.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Pathfinder</span>
                        <br />- Access to the compilation of bibliographies of
                        available references in the library for specific terms
                        in various subject areas.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Reference Service</span>
                        <br />- A library service that provides users with
                        direction to library materials, advice on collections,
                        and expertise on various information sources.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          Vertical File Collection
                        </span>
                        <br />- Access to clippings of newspaper articles in
                        various subject areas.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">Communication Skills</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        communication: !dropdowns.communication,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.communication ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={
                          dropdowns.communication ? "rotated-icon" : ""
                        }
                      />
                    )}
                  </IonButton>
                  {dropdowns.communication && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>
                          Language Learning Nook
                        </span>
                        <br />- Access to audio files for basic learning of
                        different languages.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>Human Library</span>
                        <br />- Composed of human books that a “reader” can
                        interact with, representing people subjected to
                        stereotyping and prejudices.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">Creativity and Innovation</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        creativity: !dropdowns.creativity,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.creativity ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.creativity ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.creativity && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>Book Therapy</span>
                        <br />- Access to inspirational and motivational books
                        for personal development.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title">Collaboration and Community</h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({
                        ...dropdowns,
                        collaboration: !dropdowns.collaboration,
                      })
                    }
                    expand="block"
                  >
                    {dropdowns.collaboration ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={
                          dropdowns.collaboration ? "rotated-icon" : ""
                        }
                      />
                    )}
                  </IonButton>
                  {dropdowns.collaboration && (
                    <div>
                      <p>
                        <span style={{ color: "red" }}>Referral Service</span>
                        <br />- A library service providing request letters for
                        SDCA students, faculty, and staff to access other
                        libraries and information centers.
                      </p>
                      <p>
                        <span style={{ color: "red" }}>
                          DLRC Knowledge Exchange Wall
                        </span>
                        <br />- An adaptation of “the little free library”
                        allowing students to exchange thoughts and knowledge by
                        leaving a book at a customized shelf.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}
                
                {/* Spacer between sections */}
                <div className="main-section">
                  <h2 className="section-title" id="facilities">
                    Facilities
                  </h2>
                  <IonButton
                    onClick={() =>
                      setDropdowns({ ...dropdowns, gov: !dropdowns.gov })
                    }
                    expand="block"
                  >
                    {dropdowns.gov ? (
                      <IonIcon icon={chevronDownOutline} />
                    ) : (
                      <IonIcon
                        icon={chevronDownOutline}
                        className={dropdowns.gov ? "rotated-icon" : ""}
                      />
                    )}
                  </IonButton>
                  {dropdowns.gov && (
                    <div>
                      <h3 className="section-subtitle">Circulation Area</h3>
                      <p>
                        - Is one of the key departments of the library. This area
                        is the main public service point of the library.
                        Borrowing, Loaning and Reference Assistance takes place
                        in the circulation desk or loans desk, that can be found
                        near the main entrance of the DLRC. if provides lending
                        services and facilities for return of loaned items.
                      </p>

                      <h3 className="section-subtitle">Reading Areas</h3>
                      <p>
                        - DLRC provides reading areas for all library users
                        wherein they can conveniently stay during their research
                        activity. The reading areas are provided with book
                        stands as well as a “Book Cart” where the library users
                        have to place the books they get from the shelves. The
                        reading areas of DLRC are strictly implementing the
                        policy of “Silent Study Only.”
                      </p>

                      <h3 className="section-subtitle">Faculty Area</h3>
                      <p>
                        - Area allocated for Faculty only; for their research and
                        study.
                      </p>

                      <h3 className="section-subtitle">
                        General Circulation and Filipiniana Section
                      </h3>
                      <p>
                        - Core collections and Filipiniana books can be found in
                        this section. This area follows the open shelf system
                        wherein library users can access these sections freely.
                      </p>

                      <h3 className="section-subtitle">Reserved books area</h3>
                      <p>
                        - Books of high supervision are located in the reserved
                        books area. This area strictly follows a closed-shelf
                        system wherein students and faculty are not allowed to
                        enter its premises. To access collections in this area,
                        ask the librarian for assistance.
                      </p>

                      <h3 className="section-subtitle">
                        Periodical display area
                      </h3>
                      <p>
                        - Newspapers, magazines and journals are placed in the
                        periodical display area. Students and Faculty can access
                        the materials in this area.
                      </p>

                      <h3 className="section-subtitle">Technical Section</h3>
                      <p>
                        - Is responsible for receiving and organizing library
                        materials through cataloging, indexing and abstracting.
                        It is also responsible for the labeling of library
                        materials and maintenance of the cataloging system.
                      </p>

                      <h3 className="section-subtitle">Graduate Section</h3>
                      <p>
                        - Provides quiet and congenial study space for graduate
                        students and faculty. This section also contains
                        collections that supports the graduate curricular
                        offerings of the SDCA.
                      </p>

                      <h3 className="section-subtitle">Thesis Section</h3>
                      <p>
                        - Contains undergraduate researches and theses made by the
                        SDCA students. Library users can access this section
                        freely but with limited borrowing privileges.
                      </p>

                      <h3 className="section-subtitle">Reference Section</h3>
                      <p>
                        - Contains general references such as dictionaries,
                        encyclopedias, almanacs, atlas, guidebooks, handbooks
                        and manuals can be found in this section. This section
                        follows an open shelf system but reference materials are
                        not available for loaning.
                      </p>

                      <h3 className="section-subtitle">Computer Section</h3>
                      <p>
                        - The DLRC has 20 computer units that are free to use by
                        the bonafide students of SDCA. Computer usage is limited
                        for academic research only.
                      </p>

                      <h3 className="section-subtitle">AudioVisual Section</h3>
                      <p>
                        - Contains collection of electronic resources. These
                        resources are E-Books, E-Journals, CDs and DVDs and
                        overhead projectors. To access the materials in this
                        section, ask the assistance of any of the librarians or
                        library staff available in the circulation desk.
                      </p>

                      <h3 className="section-subtitle">Baggage Counter</h3>
                      <p>
                        - All library users need to leave their bags and other
                        bulky things in the baggage counter. However, valuables
                        such as wallets or mobile phones need not be left in the
                        said counter.
                      </p>

                      <h3 className="section-subtitle">Bibliotherapy Corner</h3>
                      <p>
                        - Intended for library users’ recreational reading
                        interests. The collection in the said section is
                        composed of spiritual and self-help books that are meant
                        for good mental health.
                      </p>

                      <h3 className="section-subtitle">
                        e-Books/e-Audiobooks Kiosk
                      </h3>
                      <p>
                        - Is the new section of the DLRC that promotes reading
                        through books in digital and audio format using the
                        Tablets provided in the Kiosk. All bonafide students and
                        Faculty of SDCA are allowed to use the tablets.
                      </p>

                      <h3 className="section-subtitle">
                        DLRC- Knowledge Exchange Wall
                      </h3>
                      <p>
                        - Is the new section of the DLRC that promotes reading
                        through books in digital and audio format using the
                        Tablets provided in the Kiosk. All bonafide students and
                        Faculty of SDCA are allowed to use the tablets.
                      </p>

                      <h3 className="section-subtitle">
                        Language Learning Nook
                      </h3>
                      <p>
                        - A small space that is used for language proficiency.
                        Students may listen to the audios in different languages
                        such as: Filipino, English, Mandarin, French, Spanish,
                        Japanese, German, Italian, etc.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ height: 20 }}></div>{" "}

                {/* Spacer between sections */}
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

export default Services;
