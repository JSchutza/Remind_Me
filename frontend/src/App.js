// imports here:
import MainRouter from './components/MainRouter';

import Footer from './components/Footer';
// import the reset css file here
import './reset.css';

// import Editor from '@monaco-editor/react';

// <Editor
//   height='90vh'
//   defaultLanguage='javascript'
//   defaultValue='// some comment'
// />;



// component definitions here:
function App() {
    return (
      <>
        <MainRouter />
        <Footer />
      </>
    );
}




// exports here:
export default App;
