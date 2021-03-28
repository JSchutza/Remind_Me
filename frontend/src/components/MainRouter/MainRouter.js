// imports here:
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Home';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Div from '../Div';
import Profile from '../Profile';

import { useHistory } from 'react-router-dom';














// component definitions here:
function MainRouter(){
    const history = useHistory();


    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Div>
                        <NavBar />
                            <Home />
                    </Div>
                </Route>


                <Route exact path="/login">
                    <NavBar />
                    {/* { isUser === null ? <LoginForm /> : history.push('/profile') } */}
                </Route>

                <Route exact path="/signup">
                    <NavBar />
                    {/* { isUser === null ? <SignupForm /> : history.push('/profile') } */}
                </Route>


                <Route exact path="/profile">
                    <NavBar />
                    {/* { isUser === null ? history.push('/login') : <Profile /> } */}
                </Route>

                <Route>
                    <NavBar />
                        {/* make a 404 component */}
                        <h1> 404 Page Not Found </h1>
                </Route>
            </Switch>
        </>
    );
}



// exports here:
export default MainRouter;
