// imports here:
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Home';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Div from '../Div';
import Loader from '../Loader';
import Profile from '../Profile';
import NotebookPage from '../NotebookPage';
import ErrorMessage from '../ErrorMessage';

import { useUser } from '../../context/UserContext.js';
import { useError } from '../../context/ErrorContext.js';











// component definitions here:
function MainRouter(){
    const { isUser, toggleLoader } = useUser();
    const { errors } = useError();



    // if there is not a user
    if(isUser === null){
        return (
        <>
        <Switch>
            <Route exact path="/">
                <Div selectors={[]}>
                    <NavBar />
                    <Home />
                </Div>
            </Route>


            <Route exact path="/login">
                <NavBar />
                        {/* {toggleLoader === true ? <Loader the_message={`Logging you out`} /> : <div></div>} */}
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
            <Div selectors={[]}>
                <NavBar />
                <Home />
            </Div>
        </Route>

        <Route exact path="/profile">
            <NavBar />

            <Profile />
                    <ErrorMessage type='sidebar' errors={errors} />
        </Route>

        <Route path={`/notebook/:notebookId`}>
            <NavBar />
                <NotebookPage />
        </Route>

    </Switch>
    </>
    );
}



// exports here:
export default MainRouter;
