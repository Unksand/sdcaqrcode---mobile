import React, { useEffect, useRef, useState } from 'react';
import './Booksearch.css';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonRow, IonCol, IonGrid, IonToolbar, IonSearchbar, IonPage, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import { enter } from 'ionicons/icons';

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
  const [qrData, setQrData] = useState<any>(null); // State to store book data from backend for scanned QR codes
  const [licenseInitialized, setLicenseInitialized] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to track if the list is expanded
  const initLicenseTried = useRef(false);

  // Fetch books based on search query
  const fetchBooks = async () => {
    setLoading(true);
    try {
      console.log('Fetching books with query:', searchQuery);
      
      // Send the query and 'is_borrowed=0' to fetch only available books
      const response = await fetch(`http://localhost/SDCAQrCode/index.php/Booksload/search_books?query=${searchQuery}&is_borrowed=0`, {
        method: 'GET',
      });
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
        headers: { 
          'Content-Type': 'application/json',
        },
        
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
      const response = await fetch('http://localhost/SDCAQrCode/index.php/Booksload/borrowed_bookss', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  // Handle search input change
  const handleSearchInput = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // Initialize license for barcode scanning
  useEffect(() => {
    if (initLicenseTried.current === false) {
      initLicenseTried.current = true;
      const initLicense = async () => {
        try {
          await DBR.initLicense({ license: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNTU4MjUzLVRYbFFjbTlxIiwibWFpblNlcnZlclVSTCI6Imh0dHBzOi8vbWRscy5keW5hbXNvZnRvbmxpbmUuY29tIiwib3JnYW5pemF0aW9uSUQiOiIxMDM1NTgyNTMiLCJzdGFuZGJ5U2VydmVyVVJMIjoiaHR0cHM6Ly9zZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJjaGVja0NvZGUiOi0zMDU0MTgxMTF9" });
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

  // Limit the books shown based on the expanded state
  const booksToDisplay = expanded ? books : books.slice(0, 7);

  // Add scanned QR code to the list and fetch data from backend
  const handleScanResult = async (results: TextResult[]) => {
    console.log('Scan results received:', results); // Debugging the raw scan results

    if (!results || results.length === 0) {
      console.log('No scan results found.');
      return;
    }

    const scannedData = results.map((result, index) => {
      console.log(`Result at index ${index}:`, result); // Debugging each result object

      if (result && result.barcodeText) {
        console.log(`Extracted text from result at index ${index}: ${result.barcodeText}`);
        fetchBookByQRCode(result.barcodeText); // Fetch book info based on QR code
        return result.barcodeText; // Return the barcode text
      } else {
        console.log(`No 'barcodeText' property in result at index ${index}`);
        return ''; // Return an empty string if no barcodeText found
      }
    }).filter(text => text); // Filter out any empty strings

    console.log('Scanned data:', scannedData); // Debugging the scanned data
    setScannedQRs(prevQRs => [...prevQRs, ...scannedData]); // Add the barcode text to the scanned QR list
  };

  // Fetch book information based on the scanned QR code
  const fetchBookByQRCode = async (qrcode: string) => {
    try {
      console.log('Fetching book data for QR code:', qrcode);
      const response = await fetch(`http://localhost/SDCAQrCode/index.php/Booksload/get_book_by_qrcode?qrcode=${qrcode}`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data) {
        setQrData(data); // Set the retrieved book data
      } else {
        console.log('No data found for QR code:', qrcode);
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  // Remove scanned QR code from the list
  const removeScannedQR = (index: number) => {
    setScannedQRs(prevQRs => prevQRs.filter((_, i) => i !== index)); // Remove the QR code at the given index
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Book Catalogue</IonTitle>
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
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    fetchBooks(); // Trigger book fetch on "Enter" key press
                  }
                }}
              />
              <IonButton shape='round' onClick={fetchBooks}>Search</IonButton>
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
            booksToDisplay.length > 0 ? (
              <IonGrid className="book-grid">
                <IonRow>
                  {booksToDisplay.map((book) => (
                    <IonCol size="12" size-sm="6" size-md="4" key={book.id} className="book-col">
                      <IonItem className="book-item">
                        <IonLabel>
                          <h3>{book.book_title || 'No title available'}</h3>
                          <p>{book.Author || 'No author available'}</p>
                        </IonLabel>
                        <IonButton shape='round' fill="outline" slot="end" onClick={() => borrowBook(book.id)}>
                          Borrow
                        </IonButton>
                      </IonItem>
                    </IonCol>
                  ))}
                </IonRow>
            </IonGrid>
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

          {/* Toggle Expand/Shrink Button */}
          {books.length > 8 && (
            <IonRow>
              <IonCol size="6">
                <IonButton shape='round' expand="full" onClick={() => setExpanded(!expanded)}>
                  {expanded ? 'Show Less' : 'Show More'}
                </IonButton>
              </IonCol>
            </IonRow>
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
                        shape='round'
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

          {/* Book Details from QR Code */}
          {qrData && (
            <IonRow>
              <IonCol size="12">
                <h3>Book Details from Scanned QR Code</h3>
                <IonItem>
                  <IonLabel>
                    <h4>{qrData.book_title}</h4>
                    <p>{qrData.Author}</p>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          )}

          {/* Start Scanning Button */}
          <IonRow>
            <IonCol size='6'>
              <IonButton shape='round' expand="full" onClick={() => licenseInitialized && props.history.push("scanner")}>
              {licenseInitialized ? "Start Scanning" : "Initializing..."}
              </IonButton>
                
            </IonCol>
          </IonRow>
         

          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Borrow2;
