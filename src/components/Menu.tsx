

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonMenuButton,
} from "@ionic/react";
import { useLocation, useHistory } from "react-router-dom";
import {
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  callOutline,
  callSharp,
  buildOutline,
  buildSharp,
  businessOutline,
  businessSharp,
  bookOutline,
  bookSharp,
  personCircleOutline,
  personSharp,
} from "ionicons/icons";
import { useState, useEffect } from "react";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Profile",
    url: "/folder/Profile",
    iosIcon: personCircleOutline,
    mdIcon: personSharp,
  },
  {
    title: "Login",
    url: "/folder/LoginPage",
    iosIcon: personCircleOutline,
    mdIcon: personSharp,
  },
  {
    title: "Home",
    url: "/folder/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "About",
    url: "/folder/About",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Contact Us",
    url: "/folder/contact",
    iosIcon: callOutline,
    mdIcon: callSharp,
  },
  {
    title: "Services",
    url: "/folder/Services",
    iosIcon: callOutline,
    mdIcon: callSharp,
  },
  {
    title: "Borrow",
    url: "/folder/Borrow",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
  },
  
  {
    title: "Book Catalogue",
    url: "/folder/Booksearch",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const [isMenuDisabled, setIsMenuDisabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility on large screens

  // Get the user's email or username from localStorage
  const userEmail = localStorage.getItem("EmailId"); // You can store this as 'username' or 'email' based on your app
  const userName = localStorage.getItem("FullName");
  // Logout function
  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem("user_id");
    localStorage.removeItem("FullName");
    localStorage.removeItem("EmailId");
    localStorage.removeItem("logged_in");

    // Redirect to login page
    history.push("/folder/Home"); // Redirect to the Login Page after logout
  };

  // Update isMenuDisabled based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuDisabled(true); // Disable menu on large screens
      } else {
        setIsMenuDisabled(false); // Enable menu on small screens
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to check the current screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle the menu on larger screens
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      {/* Button to toggle the menu on larger screens */}
      {/* {isMenuDisabled && (
        <IonButton onClick={toggleMenu}  className="menu-toggle-button">
          <IonMenuButton/>  
        </IonButton>
      )} */}

      {/* IonMenu with the disabled prop */}
      <IonMenu
        contentId="main"
        type="overlay"
        swipeGesture={false}
        disabled={!isMenuOpen && isMenuDisabled}
      >
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Menu</IonListHeader>

            {/* Display the logged-in user's email */}
            {userName ? (
              <IonNote>Welcome, {userName}</IonNote>
            ) : (
              <IonNote>Welcome, Guest</IonNote>
            )}

            {/* Map over the appPages array to display menu items */}
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      location.pathname === appPage.url ? "selected" : ""
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      aria-hidden="true"
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                  <div style={{ height: "10px" }} />{" "}
                  {/* Spacer between items */}
                </IonMenuToggle>
              );
            })}

            {/* Logout Button */}
            {userEmail && (
              <IonMenuToggle autoHide={false}>
                <IonItem button onClick={handleLogout}>
                  <IonLabel>Logout</IonLabel>
                </IonItem>
                <div style={{ height: "10px" }} />{" "}
                {/* Spacer after logout button */}
              </IonMenuToggle>
            )}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
