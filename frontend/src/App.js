// imports here:
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';
import { useUser } from './context/UserContext.js';






// component definitions here:
function App() {

  const { the_user } = useUser();

  console.log(the_user);

  return (
    <>
      <MainRouter />

      <Footer />
    </>

  );

}


// exports here:
export default App;
