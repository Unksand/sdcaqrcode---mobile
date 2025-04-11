import { useState, useEffect, useRef } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, IonListHeader, IonLabel, IonItem } from '@ionic/react';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import { libraryOutline } from 'ionicons/icons';

const Return2: React.FC = (props: any) => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [licenseInitialized, setLicenseInitialized] = useState(false);
    const [showResults, setShowResults] = useState(false); // State to toggle results visibility
    const [barcodeResults, setBarcodeResults] = useState([] as TextResult[]);
    const initLicenseTried = useRef(false);

    // License initialization
    useEffect(() => {
        if (!initLicenseTried.current) {
            initLicenseTried.current = true;
            const initLicense = async () => {
                try {
                    await DBR.initLicense({
                        license: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNTU4MjUzLVRYbFFjbTlxIiwibWFpblNlcnZlclVSTCI6Imh0dHBzOi8vbWRscy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDM1NTgyNTMiLCJzdGFuZGJ5U2VydmVyVVJMIjoiaHR0cHM6Ly9zZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJjaGVja0NvZGUiOi0zMDU0MTgxMTF9"
                    });
                    setLicenseInitialized(true);
                } catch (error) {
                    alert(error);
                }
            };
            initLicense();
        }
    }, []);

    // Handle navigation state for barcode results
    useEffect(() => {
        const state = props.location.state as { results?: TextResult[] };
        if (state && state.results) {
            setBarcodeResults(state.results);
            props.history.replace({ state: {} });
        }
    }, [props.location.state]);

    // Start scanning
    const startScan = () => {
        if (licenseInitialized) {
            props.history.push("scanner", { continuousScan: false });
        }
    };

    return (
        <IonPage>
            {/* Header */}
            <IonHeader>
                <IonToolbar color="danger">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className="header-text">Return Book</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* Content */}
            <IonContent className="ion-padding borrow-content">
                <div className="borrow-card">
                    <IonIcon icon={libraryOutline} className="borrow-icon" />
                    <h2 className="borrow-title">Return a Book</h2>
                    <IonText>
                        <p>Scan the QR code of the book to return it.</p>
                    </IonText>
                    <IonButton
                        expand="full"
                        onClick={startScan}
                        className="scan-btn"
                        disabled={!licenseInitialized}
                    >
                        {licenseInitialized ? "Start Scanning" : "Initializing..."}
                    </IonButton>
                    {qrCode && (
                        <IonText>
                            <p>Scanned QR Code: {qrCode}</p>
                        </IonText>
                    )}
                    {response && (
                        <IonText>
                            <p>Response: {JSON.stringify(response)}</p>
                        </IonText>
                    )}
                </div>

                {/* Toggle Results Visibility */}
                {barcodeResults.length > 0 && (
                    <IonButton
                        expand="full"
                        onClick={() => setShowResults(!showResults)}
                        className="toggle-results-btn"
                    >
                        {showResults ? "Hide Results" : "Show Results"}
                    </IonButton>
                )}

                {/* Results */}
                {showResults && barcodeResults.length > 0 && (
                    <>
                        <IonListHeader>
                            <IonLabel>Results:</IonLabel>
                        </IonListHeader>
                        {barcodeResults.map((tr, idx) => (
                            <IonItem key={idx}>
                                <IonLabel>
                                    {(idx + 1) + ". " + tr.barcodeFormat + ": " + tr.barcodeText}
                                </IonLabel>
                            </IonItem>
                        ))}
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Return2;