// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeChanger from './components/ThemeChanger';
import ThemeProvider from './context/ThemeContext.js';
import { BrowserRouter } from 'react-router-dom';


// used to simplify ReactDOM.render below
function Root() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <ThemeChanger />
          {/*main content div here: */}
          <div>
            <App />
          </div>
        </ BrowserRouter>
      </ThemeProvider>
    </>
  );

}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
