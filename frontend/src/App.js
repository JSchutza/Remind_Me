// imports here:
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { thunk_checkIfThereIsAUser } from './thunks/session.js';
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';



// component definitions here:
function App() {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(thunk_checkIfThereIsAUser()).then(() => setIsLoaded(true));
  },[dispatch]);

  
  return isLoaded && (
    <>
    <MainRouter />

    <Footer />
    </>

  );

}


// exports here:
export default App;
