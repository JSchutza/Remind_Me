// imports here:
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';


// component definitions here:
function MainRouter(){

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <NavBar />
                        <h1> Home </h1>
                        {/* home component here */}
                </Route>

                <Route exact path="/login">
                    <NavBar />
                        <LoginForm />
                </Route>

                <Route exact path="/signup">
                    <NavBar />
                        <SignupForm />
                </Route>


                <Route>
                    <NavBar />
                        <h1> 404 Page Not Found </h1>
                </Route>
            </Switch>
        </>
    );
}



// exports here:
export default MainRouter;
