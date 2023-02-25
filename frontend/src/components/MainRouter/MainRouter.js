import {Route, Switch, Redirect} from 'react-router-dom';
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
import {IonReactRouter} from "@ionic/react-router";
import {IonRouterOutlet} from "@ionic/react";



const AuthWrapper = ({children, fallback,}) => {
    const {status, data: signInCheckResult} = useSigninCheck();

    if (!children) { throw new Error("Children must be provided"); }

    if (status === "loading") {
        return <h1> Loading.... </h1>;
    } else if (signInCheckResult.signedIn) { return children; }

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
            </Switch>
    )
}


const MainRouter = () => {
    // if the user IS logged in
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <AuthWrapper fallback={<UnAuthenticated/>}>
                    <Route path="/login" exact={true} > <Redirect to="/" /> </Route>

                    <Route path='/' exact={true}>
                        <NavBar/>
                        <Home/>
                        <CodeEditor homepage={true}/>
                    </Route>

                    <Route path='/readme' exact={true}>
                        <NavBar/>
                        <ReadMe/>
                    </Route>

                    <Route path='/profile' exact={true}>
                        <NavBar/>
                        <Profile/>
                    </Route>

                    <Route path='/notebooks' exact={true}>
                        {/* notebooks here  */}
                        <NavBar/>
                        <NotebooksPage/>
                    </Route>


                    <Route path='/notebook/:notebookId/:name' exact={true}>
                        <NavBar/>
                        <NotebookViewer/>
                    </Route>

                    <Route path='/about' exact={true}>
                        <NavBar/>
                        <AboutMe/>
                    </Route>

                </AuthWrapper>
            </IonRouterOutlet>
        </IonReactRouter>
    )

};


export default MainRouter;
