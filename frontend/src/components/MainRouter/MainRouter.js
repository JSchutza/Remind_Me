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
import TagCreator from '../TagCreator';


import { useUser } from '../../context/UserContext.js';
import { useError } from '../../context/ErrorContext.js';


//css
import { styles } from '../MainRouter';







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
            <Div selectors={[styles.main_outer_flex]}>
            <div></div>
            <Div selectors={[styles.main_grid_flex]}>

            <Div selectors={[styles.main_grid]}>
                    <Profile />

                    <Div selectors={[styles.tagcreator_container]}>
                        <TagCreator />
                    </Div>

            </Div>

            </Div>

            </Div>

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
