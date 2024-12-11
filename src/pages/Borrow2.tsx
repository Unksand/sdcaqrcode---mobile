import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonRow, IonCol, IonGrid, IonToolbar, IonSearchbar, IonPage, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';

interface Book {
  id: number;
  book_title: string;
  Author: string;
}

const Borrow2 = (props: RouteComponentProps) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [books, setBooks] = useState<Book[]>([]); // State for the list of books
  const [borrowedBooks, setBorrowedBooks] = useState([]); // State for borrowed books
  const [loading, setLoading] = useState(false); // State for loading status
  const [scannedQRs, setScannedQRs] = useState<string[]>([]); // State to store scanned QR codes
  const [licenseInitialized, setLicenseInitialized] = useState(false);
  const initLicenseTried = useRef(false);

  // Fetch books based on search query
  const fetchBooks = async () => {
    setLoading(true);
    try {
      console.log('Fetching books with query:', searchQuery);
      const response = await fetch(`http://localhost/SDCAQrCode/index.php/Booksload/search_books?query=${searchQuery}`);
      const data = await response.json();
      setBooks(data); // Update state with the fetched books
    } catch (error) {
      console.error('Error fetching books:', error); // Log the error
    }
    setLoading(false);
  };

  // Borrow a book
  const borrowBook = async (bookId: number) => {
    try {
      console.log('Attempting to borrow book with ID:', bookId);
      const response = await fetch(`http://localhost/SDCAQrCode/index.php/Booksload/borrow_book/${bookId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      alert(data.message);
      fetchBooks();
      fetchBorrowedBooks();
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  // Fetch borrowed books
  const fetchBorrowedBooks = async () => {
    try {
      console.log('Fetching borrowed books...');
      const response = await fetch('http://localhost/SDCAQrCode/index.php/Booksload/borrowed_bookss');
      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  const startScan = () => {
    if (licenseInitialized) {
      props.history.push("scanner"); // Navigate to scanner page
    }
  };

  // Handle search input change
  const handleSearchInput = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // Add scanned QR code to the list
  const handleScanResult = (results: TextResult[]) => {
    console.log('Scan results received:', results); // Debugging the raw scan results

    // Check if results are empty or undefined
    if (!results || results.length === 0) {
      console.log('No scan results found.');
      return;
    }

    // Extract the 'barcodeText' from each scan result
    const scannedData = results.map((result, index) => {
      console.log(`Result at index ${index}:`, result); // Debugging each result object

      // Ensure the 'barcodeText' property exists in the result object and return it
      if (result && result.barcodeText) {
        console.log(`Extracted text from result at index ${index}: ${result.barcodeText}`);
        return result.barcodeText; // Return the barcode text
      } else {
        console.log(`No 'barcodeText' property in result at index ${index}`);
        return ''; // Return an empty string if no barcodeText found
      }
    }).filter(text => text); // Filter out any empty strings

    console.log('Scanned data:', scannedData); // Debugging the scanned data
    setScannedQRs(prevQRs => [...prevQRs, ...scannedData]); // Add the barcode text to the scanned QR list
  };

  // Remove scanned QR code from the list
  const removeScannedQR = (index: number) => {
    setScannedQRs(prevQRs => prevQRs.filter((_, i) => i !== index)); // Remove the QR code at the given index
  };

  // Initialize license for barcode scanning
  useEffect(() => {
    if (initLicenseTried.current === false) {
      initLicenseTried.current = true;
      const initLicense = async () => {
        try {
          await DBR.initLicense({ license: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNDM2OTU1LVRYbFFjbTlxIiwibWFpblNlcnZlclVSTCI6Imh0dHBzOi8vbWRscy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDM0MzY5NTUiLCJzdGFuZGJ5U2VydmVyVVJMIjoiaHR0cHM6Ly9zZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJjaGVja0NvZGUiOjI5NjAwNDU0NX0=" });
          setLicenseInitialized(true);
        } catch (error) {
          alert(error);
        }
      };
      initLicense();
    }
  }, []);

  // Fetch initial data
  useEffect(() => {
    console.log('Component mounted, fetching initial data...');
    fetchBooks();
    fetchBorrowedBooks();
  }, []);

  // Handle scanned results (assuming DBR sends them via props.location.state)
  useEffect(() => {
    const state = props.location.state as { results?: TextResult[] };
    if (state && state.results) {
      handleScanResult(state.results); // Handle the scan results properly
      props.history.replace({ state: {} }); // Clear state after using it
    }
  }, [props.location.state]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Borrow a Book</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          {/* Search Bar */}
          <IonRow>
            <IonCol size="12">
              <IonSearchbar
                color={'primary'}
                value={searchQuery}
                onIonInput={handleSearchInput}
                debounce={500}
                placeholder="Search for books..."
                onIonClear={() => fetchBooks()} // Reset search
              />
              <IonButton onClick={fetchBooks}>Search</IonButton>
            </IonCol>
          </IonRow>

          {/* Available Books Section */}
          <IonRow>
            <IonCol size="12">
              <h2>Available Books</h2>
            </IonCol>
          </IonRow>

          {/* Books List */}
          {loading ? (
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel>Loading...</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          ) : (
            books.length > 0 ? (
              books.map((book) => (
                <IonRow key={book.id}>
                  <IonCol size="12">
                    <IonItem>
                      <IonLabel>
                        <h3>{book.book_title || 'No title available'}</h3>
                        <p>{book.Author || 'No author available'}</p>
                      </IonLabel>
                      <IonButton fill="outline" slot="end" onClick={() => borrowBook(book.id)}>
                        Borrow
                      </IonButton>
                    </IonItem>
                  </IonCol>
                </IonRow>
              ))
            ) : (
              <IonRow>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel>No books available</IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
            )
          )}

          {/* QR Code Scanner Section */}
          <IonRow>
            <IonCol size="12">
              <h3>Scanned QR Codes</h3>
              <ul style={{ padding: 0, listStyle: 'none' }}>
                {scannedQRs.length > 0 ? (
                  scannedQRs.map((qr, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{qr}</span> {/* Display the QR text */}
                      <IonButton
                        color="danger"
                        fill="clear"
                        size="small"
                        onClick={() => removeScannedQR(index)}
                      >
                        Remove
                      </IonButton>
                    </li>
                  ))
                ) : (
                  <li>No QR codes scanned yet</li>
                )}
              </ul>
            </IonCol>
          </IonRow>

          {/* Start Scanning Button */}
          <IonButton expand="full" onClick={startScan}>
            {licenseInitialized ? "Start Scanning" : "Initializing..."}
          </IonButton>

          {/* Borrowed Books Section */}
          <IonRow>
            <IonCol size="12">
              <h3>My Borrowed Books</h3>
              <ul style={{ padding: 0, listStyle: 'none' }}>
                {borrowedBooks.length > 0 ? (
                  borrowedBooks.map((book) => (
                    <li key={book.id}>{book.book_title} by {book.Author}</li>
                  ))
                ) : (
                  <li>None</li>
                )}
              </ul>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Borrow2;
