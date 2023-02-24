// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {EditorProvider} from './context/EditorContext.js';


import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store';
import {restoreCSRF, csrfFetch} from './store/csrf.js';
import {FirebaseAppProvider} from "reactfire";


const store = configureStore();

const firebaseConfig = {
    apiKey: "AIzaSyC0JwXo9YByGJDkUgZJdhMUPwpi-WEShWY",
    authDomain: "remind-me-25014.firebaseapp.com",
    databaseURL: "https://remind-me-25014-default-rtdb.firebaseio.com",
    projectId: "remind-me-25014",
    storageBucket: "remind-me-25014.appspot.com",
    messagingSenderId: "211082768811",
    appId: "1:211082768811:web:b994daa35c1b657a9ae2ee",
    measurementId: "G-7S0XEW64FG"
};



// for development
if (process.env.NODE_ENV !== 'production') {
    restoreCSRF();
}


// used to simplify ReactDOM.render below
function Root() {
    return (
        <Provider store={store}>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <BrowserRouter>
                    <EditorProvider>
                        <App/>
                    </EditorProvider>
                </BrowserRouter>
            </FirebaseAppProvider>
        </Provider>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <Root/>
    </React.StrictMode>,
    document.getElementById('root')
);
