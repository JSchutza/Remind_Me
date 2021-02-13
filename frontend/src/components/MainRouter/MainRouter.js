// imports here:
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm';
import NavBar from './NavBar';


// component definitions here:
function MainRouter(){

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <NavBar />
                        <h1> Home </h1>
                </Route>

                <Route exact path="/login">
                    <NavBar />
                        <LoginForm />
                </Route>


{/* default route if none of the paths match */}
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
