// imports here:
import MainRouter from './components/MainRouter';
import React from 'react';
import Footer from './components/Footer';

// import the reset css file here
import './reset.css';
import {connectAuthEmulator, getAuth} from "firebase/auth"; // Firebase v9+
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore"; // Firebase v9+

import {AuthProvider, useFirebaseApp, FirestoreProvider, } from "reactfire";



function App() {
    const app = useFirebaseApp();
    const firestoreDatabase = getFirestore(app);
    const auth = getAuth(app);


    if (process.env.NODE_ENV !== "production") {
        // Set up emulators
        connectFirestoreEmulator(firestoreDatabase, "localhost", 9000);
        connectAuthEmulator(auth, "http://localhost:9099");
    }


    return (
        <>
            <AuthProvider sdk={auth}>
                <FirestoreProvider sdk={firestoreDatabase}>

                    <MainRouter/>
                    <Footer/>
                </FirestoreProvider>
            </AuthProvider>
        </>
    );
}


// exports here:
export default App;
