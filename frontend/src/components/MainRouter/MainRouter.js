import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from "../Home";
import NavBar from '../NavBar';
import ReadMe from '../ReadMe';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import Profile from '../Profile';
import NotebookViewer from "../NotebookViewer";
import NotebooksPage from "../NotebooksPage";
import AboutMe from "../AboutMe";
import {useSigninCheck} from "reactfire";
import {CodeEditor} from "../Editor";

const AuthWrapper = ({children, fallback,}) => {

    const {status, data: signInCheckResult} = useSigninCheck();

    if (!children) {
        throw new Error("Children must be provided");
    }

    if (status === "loading") {
        return <h1> Loading.... </h1>;
    } else if (signInCheckResult.signedIn) {

        return children;
    }

    return fallback;
};


const UnAuthenticated = () => {
    //  if the user is NOT logged in
    return (
            <Switch>
                <Route path='/' exact={true}>
                    <NavBar/>
                    <Home/>
                    <CodeEditor homepage={true}/>
                </Route>

                <Route path='/readme' exact={true}>
                    <NavBar/>
                    <ReadMe/>
                </Route>

                <Route path='/login' exact={true}>
                    <NavBar/>
                    <LoginForm/>
                </Route>

                <Route path='/signup' exact={true}>
                    <NavBar/>
                    <SignupForm/>
                </Route>

                <Route path='/about' exact={true}>
                    <NavBar/>
                    <AboutMe/>
                </Route>

                <Route>
                    <NavBar/>
                    <h2>Page Not Found</h2>
                </Route>

            </Switch>
    )
}


const MainRouter = () => {

    // if the user IS logged in
    return (
        <>
            <AuthWrapper fallback={<UnAuthenticated/>}>

                <Switch>

                    <Route path='/' exact>
                        <NavBar/>
                        <Home/>
                        <CodeEditor homepage={true}/>
                    </Route>

                    <Route path='/readme' exact>
                        <NavBar/>
                        <ReadMe/>
                    </Route>

                    <Route path='/profile' exact>
                        <NavBar/>
                        <Profile/>
                    </Route>

                    <Route path='/notebooks' exact>
                        {/* notebooks here  */}
                        <NavBar/>
                        <NotebooksPage/>
                    </Route>


                    <Route path='/notebook/:notebookId' exact>
                        <NavBar/>
                        <NotebookViewer/>
                    </Route>

                    <Route path='/about' exact>
                        <NavBar/>
                        <AboutMe/>
                    </Route>

                    <Route>
                        <NavBar/>
                        <h2>Page Not Found</h2>
                    </Route>

                </Switch>
            </AuthWrapper>
        </>
    )

};


export default MainRouter;
