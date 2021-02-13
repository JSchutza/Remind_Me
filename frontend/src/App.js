// imports here:
import MainRouter from './components/MainRouter';



// component definitions here:
function App() {

  // will need to use an if to determine if the user is logged in or not
  // if logged-in show the ... else show the <LoginForm/>


  // MainRouter does all of the routing
  // need to find a way to pass info if the user is logged in or not
  // thought -- pass boolean to MainRouter indicating if user is logged in
    // use that prop in MainRouter to conditionaly show different components based on the outcome
  return (
    <>
      <MainRouter />
    </>

  );
}


// exports here:
export default App;
