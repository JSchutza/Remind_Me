// imports here:
import MainRouter from './components/MainRouter';

import Footer from './components/Footer';
import RunCodeButton from './components/RunCodeButton';
// import the reset css file here
import './reset.css';




// component definitions here:
function App() {
    return (
      <>
        <MainRouter />
        <Footer />
        <RunCodeButton />
      </>
    );
}




// exports here:
export default App;
