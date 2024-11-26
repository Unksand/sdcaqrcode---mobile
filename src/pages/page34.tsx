import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';



import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import $ from 'jquery';
import { useState,useEffect, useRef} from 'react';

const page34: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [color, setColor] = useState('');

  // $.ajax({
  //   url: "script.php",
  //   method: "POST",
  //   data: {id : menuId},
  //   dataType: "html"
  // });
  
  // request.done(function(msg) {
  //   $("#log").html( msg );
  // });
  
  // request.fail(function(jqXHR, textStatus) {
  //   alert( "Request failed: " + textStatus );
  // });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonTitle>control {color}</IonTitle>
        <IonButtons onClick={() => setColor("yellow")}>click page 3</IonButtons>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default page34;
