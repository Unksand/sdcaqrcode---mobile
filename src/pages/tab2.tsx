import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList ,IonSelect, IonItem, IonSelectOption, IonToast} from '@ionic/react';
import { useParams } from 'react-router';


import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import $ from 'jquery';
import { useState,useEffect, useRef} from 'react';

const tab2: React.FC = () => {

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
      <IonTitle> Select an Option</IonTitle>
        <IonList>
        <IonItem>
          <IonSelect aria-label="fruit" placeholder="Options">
            <IonSelectOption value="option 1">Option 1</IonSelectOption>
            <IonSelectOption value="option 2">Option 2</IonSelectOption>
            <IonSelectOption value="option 3">Option 3</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      

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

export default tab2;
