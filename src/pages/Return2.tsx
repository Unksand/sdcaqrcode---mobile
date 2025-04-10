import { useState, useEffect, useRef } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader'; // Importing DBR and TextResult
import { libraryOutline } from 'ionicons/icons';

const Return2: React.FC = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [licenseInitialized, setLicenseInitialized] = useState(false);
    const initLicenseTried = useRef(false);

    // License initialization
    useEffect(() => {
        if (!initLicenseTried.current) {
            initLicenseTried.current = true;
            const initLicense = async () => {
                try {
                    await DBR.initLicense({
                        license: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNDM2OTU1LVRYbFFjbTlxIiwibWFpblNlcnZlclVSTCI6Imh0dHBzOi8vbWRscy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDM0MzY5NTUiLCJzdGFuZGJ5U2VydmVyVVJMIjoiaHR0cHM6Ly9zZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJjaGVja0NvZGUiOjI5NjAwNDU0NX0="
                    });
                    setLicenseInitialized(true);
                } catch (error) {
                    console.error("License initialization failed:", error);
                }
            };
            initLicense();
        }
    }, []);

    // QR code scanning
    const handleScan = async () => {
        if (!licenseInitialized) {
            alert("License not initialized. Please try again later.");
            return;
        }

        try {
            const results: TextResult[] = await DBR.scan();
            if (results && results.length > 0) {
                const scannedData = results[0].barcodeText;
                setQrCode(scannedData);

                // Send the scanned QR code to the API
                fetch('https://your-api-endpoint.com/api/return', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ qrCode: scannedData }),
                })
                    .then((res) => res.json())
                    .then((data) => setResponse(data))
                    .catch((error) => console.error("API call failed:", error));
            }
        } catch (error) {
            console.error("Scanning failed:", error);
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
                    <IonButton expand="full" onClick={handleScan} className="scan-btn">
                        Scan QR Code
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
            </IonContent>
        </IonPage>
    );
};

export default Return2;