// imports here:
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { thunk_checkIfThereIsAUser } from './thunks/session.js';
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';







// component definitions here:
function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(thunk_checkIfThereIsAUser())
  }, [dispatch]);


  return (
    <>
      <MainRouter />

      <Footer />
    </>

  );

}


// exports here:
export default App;
