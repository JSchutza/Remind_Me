// imports here:
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Home';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Div from '../Div';
import Profile from '../Profile';

import { useUser } from '../../context/UserContext.js';




// component definitions here:
function MainRouter(){
    const { isUser } = useUser();

    // if there is not a user
    if(isUser === null){
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
                <LoginForm />
            </Route>

            <Route exact path="/signup">
                <NavBar />
                <SignupForm />
            </Route>
        </Switch>
        </>
    );

    }
    // if there is a user
    return (
    <>
    <Switch>
        <Route exact path="/">
            <Div>
                <NavBar />
                <Home />
            </Div>
        </Route>

        <Route exact path="/profile">
            <NavBar />
            <Profile />
        </Route>
    </Switch>
    </>
    );
}



// exports here:
export default MainRouter;
