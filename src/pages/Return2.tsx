
import { useState } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import QRCodeScanner from '../components/QRCodeScanner';

const Return2: React.FC = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);

    

    const handleScan = (data: string | null) => {
        if (data) {
            setQrCode(data);
            axios.post('https://your-api-endpoint.com/api/return', { qrCode: data })
                .then(res => setResponse(res.data))
                .catch(err => console.error(err));
        }
    };

    const handleError = (err: any) => {
        console.error(err);
    };
    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Return2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <QRCodeScanner
                    onScan={handleScan}
                    onError={handleError}
                />
                {qrCode && <p>Scanned QR Code: {qrCode}</p>}
                {response && <p>Response: {response}</p>}
            </IonContent>
        </IonPage>
    );
};

export default Return2;