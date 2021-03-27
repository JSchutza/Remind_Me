// imports here:
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Div from '../Div';


// component definitions here:
function MainRouter({ current_theme }){


    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Div current_theme={current_theme} additional_selectors={[]}>
                        <NavBar />
                        {/* home component here */}
                            <h1> Home </h1>
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
