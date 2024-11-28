import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';


import Page from './pages/Page';
import Borrow from './pages/Borrow';
import Home from './pages/Home';
import Return from './pages/Return';
import LoginPage from './pages/Login';
import AboutPage from './pages/AboutPage';
import Government from './pages/Goverment';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LoginAdmin from './pages/LoginAdmin';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';





setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Route path="/folder/LoginPage" exact>
            <LoginPage />
            
          </Route>
          <Route path="/folder/LoginAdmin" exact>
              <LoginAdmin />
            </Route>
          
          
          
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/folder/Home" exact>
              <Home />
            </Route>
             <Route path="/folder/About" exact>
              <AboutPage />
            </Route>
             {/* <Route path="/folder/Resources" exact>
              <ResourcesPage />
            </Route> */}
            <Route path="/folder/Contact" exact>
              <Contact/>
            </Route>
            <Route path="/folder/Services" exact>
              <Services />
            </Route>
            <Route path="/folder/Government" exact>
              <Government />
            </Route>
            <Route path="/folder/Borrow" exact>
              <Borrow />
            </Route>
            <Route path="/folder/Return" exact>
              <Return />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
