import React, { useState } from 'react';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';

const sample: React.FC = () => {
    const [scanResult, setScanResult] = useState<string | null>(null);

    const handleScan = (result: string | null) => {
        if (result) {
            setScanResult(result);
        }
    };

    const handleError = (error: any) => {
        console.error(error);
    };

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <TextResult
                onScan={handleScan}
                onError={handleError}
            />
            {scanResult && (
                <div>
                    <h2>Scan Result:</h2>
                    <p>{scanResult}</p>
                </div>
            )}
        </div>
    );
};

export default sample;