// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeChanger from './components/ThemeChanger';
import ThemeProvider from './context/ThemeContext.js';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';


const store = configureStore();


// for development
if (process.env.NODE_ENV !== 'production') {
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

          {/*main content div here: */}
          <div>
            <App />
          </div>
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
