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
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline, homeSharp, informationCircleOutline, informationCircleSharp, callOutline, callSharp, buildOutline, buildSharp, businessOutline, businessSharp, bookOutline, bookSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/folder/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'About',
    url: '/folder/About',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp
  },
  {
    title: 'Contact Us',
    url: '/contact',
    iosIcon: callOutline,
    mdIcon: callSharp
  },
  {
    title: 'Services',
    url: '/services',
    iosIcon: buildOutline,
    mdIcon: buildSharp
  },
  {
    title: 'Government Services',
    url: '/government-services',
    iosIcon: businessOutline,
    mdIcon: businessSharp
  },
  {
    title: 'Borrow',
    url: '/folder/Borrow', // Ensure this matches the route in App component
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'Return',
    url: '/folder/Return', // Ensure this matches the route in App component
    iosIcon: bookOutline,
    mdIcon: bookSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
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
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;