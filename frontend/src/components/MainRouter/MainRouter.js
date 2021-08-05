
import { Route, Switch } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

import NavBar from '../NavBar';
import ReadMe from '../ReadMe';





const MainRouter = () => {
  const { isUser } = useUser();


  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <Switch>

        <Route path='/' exact>
          <NavBar />
        </Route>

        <Route path='/readme' exact>
          <NavBar />
          <ReadMe />
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
      </Route>

      <Route path='/readme' exact>
        <NavBar />
        <ReadMe />
      </Route>

      <Route path='/login' exact>
        {/* show login form */}
      </Route>

      <Route path='/signup' exact>
          {/* show signup form */}
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
