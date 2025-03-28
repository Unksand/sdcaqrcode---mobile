import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useEffect, useRef, useState } from 'react';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import { RouteComponentProps } from 'react-router';

const Homes = (props:RouteComponentProps) => {
  const initLicenseTried = useRef(false);
  const [continuousScan, setContinuousScan] = useState(false);
  const [barcodeResults, setBarcodeResults] = useState([] as TextResult[]);
  const [licenseInitialized, setLicenseInitialized] = useState(false);

  useEffect(() => {
    if (initLicenseTried.current === false) {
      initLicenseTried.current = true;
      const initLicense = async () => {
        try {
          await DBR.initLicense({license:"DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNDM2OTU1LVRYbFFjbTlxIiwibWFpblNlcnZlclVSTCI6Imh0dHBzOi8vbWRscy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDM0MzY5NTUiLCJzdGFuZGJ5U2VydmVyVVJMIjoiaHR0cHM6Ly9zZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJjaGVja0NvZGUiOjI5NjAwNDU0NX0="})  
          setLicenseInitialized(true);
        } catch (error) {
          alert(error);
        }
      }
      initLicense();
    }
    initLicenseTried.current = true;
  }, []);
  useEffect(() => {
    const state = props.location.state as { results?: TextResult[] };
    console.log(state);
    if (state) {
      if (state.results) {
        setBarcodeResults(state.results);
        props.history.replace({ state: {} });
      }
    }
  }, [props.location.state]);

  const startScan = () => {
    if (licenseInitialized) {
      props.history.push("scanner")
    }
  }

  const handleOption = (e: any) => {
    let checked = e.detail.checked;
    setContinuousScan(checked)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
          <IonTitle>QR Code Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">For Scanning</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" onClick={startScan}>{licenseInitialized?"Start Scanning":"Initializing..."}</IonButton>
        <IonList>
          <IonItem>
            <IonLabel>Continuous Scan</IonLabel>
            <IonCheckbox slot="end" value="Continuous Scan" checked={continuousScan} onIonChange={(e) => handleOption(e)}/>
          </IonItem>
          {(barcodeResults.length>0) &&
            <IonListHeader>
              <IonLabel>Results:</IonLabel>
            </IonListHeader>
          }
          {barcodeResults.map((tr,idx) => (
            <IonItem key={idx}>
              <IonLabel>{(idx+1) + ". " + tr.barcodeFormat + ": " + tr.barcodeText}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Homes;
