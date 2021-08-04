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
import TagViewer from '../TagViewer';
import ReadMe from '../ReadMe';
import NoteViewer from '../NoteViewer';
import ShowNoteBooks from '../ShowNoteBooks';


import { useUser } from '../../context/UserContext.js';
import { useError } from '../../context/ErrorContext.js';
import { useSelector } from 'react-redux';

//css
import { styles } from '../MainRouter';







// component definitions here:
function MainRouter(){
    const { isUser, toggleLoader } = useUser();
    const { errors } = useError();
    const recentCreatedNote = useSelector((store) => store.recentlyCreatedNoteReducer.note);


    // if there is NOT a user
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
                <LoginForm />
            </Route>

            <Route exact path="/signup">
                <NavBar />
                <SignupForm />
            </Route>

            <Route exact path="/readme">
                <NavBar />
                    <ReadMe />
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
            <TagCreator />
            <TagViewer />
            <ErrorMessage type='sidebar' errors={errors} />
        </Route>

        <Route exact path="/notebooks">
            <NavBar />
                <ShowNoteBooks />
        </Route>


        <Route path={`/notebook/:notebookId`}>
            <NavBar />
                <NotebookPage />
        </Route>

        <Route path={`/note/:noteId`}>
            <NavBar />
                <NoteViewer the_content={recentCreatedNote} />
        </Route>

        <Route exact path="/readme">
            <NavBar />
                <ReadMe />
        </Route>
    </Switch>
    </>
    );
}



// exports here:
export default MainRouter;
