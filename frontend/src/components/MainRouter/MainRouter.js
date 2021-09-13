
import { Route, Switch } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

import Home from "../Home";
import NavBar from '../NavBar';
import ReadMe from '../ReadMe';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Editor from '../Editor';
import Profile from '../Profile';
import NotebookViewer from "../NotebookViewer";
import NotebooksPage from "../NotebooksPage";
import AboutMe from "../AboutMe";


const MainRouter = () => {
  const { isUser } = useUser();


  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <Switch>

        <Route path='/' exact>
          <NavBar />
            <Home />
            <Editor homepage={true} />
        </Route>

        <Route path='/readme' exact>
          <NavBar />
          <ReadMe />
        </Route>

      <Route path='/profile' exact>
          <NavBar />
          <Profile />
      </Route>

      <Route path='/notebooks' exact>
        {/* notebooks here  */}
          <NavBar />
            <NotebooksPage />
      </Route>


      <Route path='/notebook/:notebookId' exact>
        <NavBar />
            <NotebookViewer />
      </Route>

        <Route path='/about' exact>
          <NavBar />
            <AboutMe />
        </Route>

        <Route>
          <NavBar />
          <h2>Page Not Found</h2>
        </Route>

        </Switch>
      </>
    )
  }



  //  if the user is NOT logged in
  return (
    <>
      <Switch>

      <Route path='/' exact>
        <NavBar />
          <Home />
        <Editor homepage={true} />
      </Route>

      <Route path='/readme' exact>
        <NavBar />
        <ReadMe />
      </Route>

      <Route path='/login' exact>
        <NavBar />
        <LoginForm />
      </Route>

      <Route path='/signup' exact>
          <NavBar />
          <SignupForm />
      </Route>

      <Route path='/about' exact>
        <NavBar />
          <AboutMe />
      </Route>

      <Route>
        <NavBar />
        <h2>Page Not Found</h2>
      </Route>

      </Switch>
    </>
  )
};


export default MainRouter;
