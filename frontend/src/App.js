// imports here:
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';
// import the reset css file here
import './reset.css';

// import main css file here
import styles from './main.module.css';


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
