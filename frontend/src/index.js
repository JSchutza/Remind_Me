// imports here:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeChanger from './components/ThemeChanger';
import ThemeProvider from './context/ThemeContext.js';



// used to simplify ReactDOM.render below
function Root() {



  return (
    <>
      <ThemeProvider>
        <ThemeChanger />
          <App />
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
