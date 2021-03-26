// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeChanger from './components/ThemeChanger';
import ThemeProvider from './context/ThemeContext.js';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf.js';


const store = configureStore();


// for development
if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}




// used to simplify ReactDOM.render below
function Root() {

  return (
    <>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ThemeChanger />
            <App />
        </ BrowserRouter>
      </ThemeProvider>
      </Provider>
    </>
  );

}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
