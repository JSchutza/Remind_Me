import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { thunk_loginDemoUser, thunk_logoutUser } from '../../thunks/session.js';
import { clearError } from "../../actions/error.js";

import styles from "./navbar.module.css";
import {useFirebaseApp, useSigninCheck} from "reactfire";
import {getAuth, signOut} from "firebase/auth";




const NavBar = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const history = useHistory();
  const dispatch = useDispatch();
  const {status, data: signInCheckResult} = useSigninCheck();



  const loginDemoUser = async event => {
    event.preventDefault();
    // await dispatch(thunk_loginDemoUser());
    // dispatch(clearError());
    // history.push('/profile');
  }


  const logoutUser = async event => {
    event.preventDefault();
    const success = await signOut(auth);
    // await dispatch(thunk_logoutUser());
    await dispatch(clearError());
    // if (success) {
    //   history.push('/');
    // }
  }



  const handleClick = (pathInstance, event) => {
    event.preventDefault();
    if (pathInstance.onclick) {
      pathInstance.func(event);
      history.push(pathInstance.path);
    } else {
      history.push(pathInstance.path);
    }
  };


  // if the user IS logged in
  if(signInCheckResult.signedIn) {
    // create an array of paths for nav bar
    const paths = [
      { path: '/', name: 'Home', onclick: true, func: () => dispatch(clearError()) },
      { path: '/profile', name: 'Profile', onclick: false, func: null },
      { path: '/notebooks', name: 'Notebooks', onclick: false, func: null },
      { path: '/', name: 'Logout', onclick: true, func: event => logoutUser(event)  },
    ];


    return (
        <div className={styles.nav_containter}>
          <nav>
            {paths.map(eachLink => (
                <div
                    key={nanoid()}
                    className={styles.each_li_div}
                    onClick={event => handleClick(eachLink, event)}
                >
                  {eachLink.onclick ?
                      <li> <NavLink
                          className={styles.each_link}
                          to={`${eachLink.path}`}
                          onClick={eachLink.func}
                      > {eachLink.name} </NavLink> </li>
                      :
                      <li> <NavLink
                          className={styles.each_link}
                          to={`${eachLink.path}`}
                      > {eachLink.name} </NavLink> </li>
                  }
                </div>
            ))}
          </nav>
        </div>
    )

  }


  // if the user is NOT logged in
  // create an array of paths for nav bar
  const paths = [
    { path: '/', name: 'Home', onclick: true, func: () => dispatch(clearError()) },
    { path: '/login', name: 'Login', onclick: true, func: () => dispatch(clearError()) },
    { path: '/signup', name: 'Sign Up', onclick: true, func: () => dispatch(clearError()) },
    { path: '/', name: 'Demo', onclick: true, func: event => loginDemoUser(event) },
  ];


  return (
      <div className={styles.nav_containter}>
        <nav>
          {paths.map(eachLink => (
            <div
              key={nanoid()}
              className={styles.each_li_div}
              onClick={event => handleClick(eachLink, event)}
            >
                {eachLink.onclick ?
                    <li> <NavLink
                            className={styles.each_link}
                            to={`${eachLink.path}`}
                            onClick={eachLink.func}
                          > {eachLink.name} </NavLink> </li>
                  :
                    <li> <NavLink
                            className={styles.each_link}
                            to={`${eachLink.path}`}
                          > {eachLink.name} </NavLink> </li>
                }
              </div>
          ))}
        </nav>
      </div>
  )

};



export default NavBar;
