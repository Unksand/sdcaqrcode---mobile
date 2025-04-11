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
  IonAlert,
} from "@ionic/react";
import { useLocation, useHistory } from "react-router-dom";
import {
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  callOutline,
  callSharp,
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
  const [showLogoutAlert, setShowLogoutAlert] = useState(false); // State to control the logout confirmation alert

  // Get the user's email or username from localStorage
  const userEmail = localStorage.getItem("EmailId");
  const userName = localStorage.getItem("FullName");
  const isAdminLoggedIn = localStorage.getItem("admin_logged_in") === "true"; // Check if admin is logged in

  // Logout function
  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem("StudentId");
    localStorage.removeItem("FullName");
    localStorage.removeItem("EmailId");
    localStorage.removeItem("logged_in");
    localStorage.removeItem("admin_logged_in");

    // Redirect to login page
    history.push("/folder/Home"); // Redirect to the Home Page after logout
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

  return (
    <>
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

            {/* Admin Page (only visible if admin is logged in) */}
            {isAdminLoggedIn && (
              <IonMenuToggle autoHide={false}>
                <IonItem
                  className={
                    location.pathname === "/folder/AdminDashboard"
                      ? "selected"
                      : ""
                  }
                  routerLink="/folder/AdminDashboard"
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={personCircleOutline}
                    md={personSharp}
                  />
                  <IonLabel>Admin Dashboard</IonLabel>
                </IonItem>
                <div style={{ height: "10px" }} />{" "}
                {/* Spacer after admin page */}
              </IonMenuToggle>
            )}

            {/* Logout Button */}
            {userEmail && (
              <IonMenuToggle autoHide={false}>
                <IonItem
                  button
                  onClick={() => setShowLogoutAlert(true)} // Show confirmation alert
                >
                  <IonLabel>Logout</IonLabel>
                </IonItem>
                <div style={{ height: "10px" }} />{" "}
                {/* Spacer after logout button */}
              </IonMenuToggle>
            )}
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Logout Confirmation Alert */}
      <IonAlert
        isOpen={showLogoutAlert}
        onDidDismiss={() => setShowLogoutAlert(false)} // Close alert when dismissed
        header={"Confirm Logout"}
        message={"Are you sure you want to log out?"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Logout canceled"); // Debugging: Log cancel action
            },
          },
          {
            text: "Logout",
            handler: () => {
              handleLogout(); // Call the logout function
            },
          },
        ]}
      />
    </>
  );
};

export default Menu;