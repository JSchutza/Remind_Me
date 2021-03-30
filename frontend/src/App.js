// imports here:
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';
import Div from './components/Div';
// import the reset css file here
import './reset.css';

// import main css file here
import styles from './main.module.css';


// component definitions here:
function App() {
    return (
      <>
        <Div selectors={[styles.main_content]}>
          <Div selectors={[]}>
            <MainRouter />
          </Div>
      </Div>


      <Div selectors={[styles.fill]}>
      </Div>


        <Div selectors={['test']}>
          <Div selectors={[]}>
            <Footer />
          </Div>
        </Div>
      </>
    );
}




// exports here:
export default App;
