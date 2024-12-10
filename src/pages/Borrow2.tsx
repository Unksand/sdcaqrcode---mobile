import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonRow, IonCol, IonGrid, IonToolbar, IonSearchbar, IonPage, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { DBR, TextResult } from 'capacitor-plugin-dynamsoft-barcode-reader';

// Define the Book interface
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

  const [barcodeResults, setBarcodeResults] = useState([] as TextResult[]);
  const [licenseInitialized, setLicenseInitialized] = useState(false);
  const initLicenseTried = useRef(false);

  // Fetch books based on search query
  const fetchBooks = async () => {
    setLoading(true);
    try {
      console.log('Fetching books with query:', searchQuery);
      const response = await fetch(`http://localhost/SDCAQrCode/index.php/Booksload/search_books?query=${searchQuery}`);
      const data = await response.json();
      console.log('Books fetched:', data);  // Log the fetched books
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
      console.log('Borrow response:', data);  // Log the response after borrowing
      alert(data.message); // Alert the user with the response message
      fetchBooks(); // Re-fetch books to update the list
      fetchBorrowedBooks(); // Re-fetch borrowed books list
    } catch (error) {
      console.error('Error borrowing book:', error); // Log the error
    }
  };

  // Fetch borrowed books
  const fetchBorrowedBooks = async () => {
    try {
      console.log('Fetching borrowed books...');
      const response = await fetch('http://localhost/SDCAQrCode/index.php/Booksload/borrowed_bookss');
      const data = await response.json();
      console.log('Borrowed books fetched:', data);  // Log the fetched borrowed books
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error); // Log the error
    }
  };
  const startScan = () => {
    if (licenseInitialized) {
      props.history.push("scanner")
    }
  }
  // Handle search input change
  const handleSearchInput = (e: any) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log('Component mounted, fetching initial data...');
    fetchBooks(); // Initial fetch of books
    fetchBorrowedBooks(); // Initial fetch of borrowed books
  }, []); // Run only once when the component mounts

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
                value={searchQuery}
                onIonInput={handleSearchInput}
                debounce={500}
                placeholder="Search for books..."
                onIonClear={() => fetchBooks()}
              />
              <IonButton onClick={fetchBooks}> search</IonButton>
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
                        <h3>{book.book_title || 'No title available'}</h3>  {/* Book title */}
                        <p>{book.Author || 'No author available'}</p>   {/* Book author */}
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
                    <IonLabel>No books available, Maybe is dosen't exist?</IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
            )
          )}
          <h3>QRCode Scanner</h3>
          <IonButton expand="full" onClick={startScan}>{licenseInitialized?"Start Scanning":"Initializing..."}</IonButton>
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
