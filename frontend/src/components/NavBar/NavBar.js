

import { useUser } from '../../context/UserContext.js';
import { NavLink, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';


import { thunk_loginDemoUser, thunk_logoutUser } from '../../thunks/session.js';
import { clearError } from "../../actions/error.js";



import styles from "./navbar.module.css";




const NavBar = () => {
  const { isUser } = useUser();
  const history = useHistory();
  const dispatch = useDispatch();



  const loginDemoUser = event => {
    event.preventDefault();
    dispatch(thunk_loginDemoUser(history));
    dispatch(clearError());
  }


  const logoutUser = event => {
    event.preventDefault();
    dispatch(thunk_logoutUser(history));
    dispatch(clearError());
  }




  // if the user IS logged in
  if(isUser) {
    // create an array of paths for nav bar
    const paths = [
      { path: '/', name: 'Home', onclick: false, func: null },
      { path: '/profile', name: 'Profile', onclick: false, func: null },
      { path: '/notebooks', name: 'Notebooks', onclick: false, func: null },
      { path: '/', name: 'Logout', onclick: true, func: (event) => logoutUser(event)  },
    ];


    return (
      <>

        <div className={styles.nav_containter}>
          <nav>
            {paths.map(eachLink => (
              <>
                <div className={styles.each_li_div}>
                  {eachLink.onclick ?
                    <>
                      <li> <NavLink to={`${eachLink.path}`} onClick={eachLink.func} > {eachLink.name} </NavLink> </li>
                    </>
                  :
                    <>
                      <li> <NavLink to={`${eachLink.path}`}> {eachLink.name} </NavLink> </li>
                    </>
                  }
                </div>
              </>
            ))}
          </nav>
        </div>

      </>
    )

  }

  // create an array of paths for nav bar
  const paths = [
    { path: '/', name: 'Home', onclick: false, func: null },
    { path: '/login', name: 'Login', onclick: true, func: () => dispatch(clearError()) },
    { path: '/signup', name: 'Sign Up', onclick: true, func: () => dispatch(clearError()) },
    { path: '/', name: 'Demo', onclick: true, func: (event) => loginDemoUser(event) },
  ];


  // if the user is NOT logged in
  return (
    <>

      <div className={styles.nav_containter}>
        <nav>
          {paths.map(eachLink => (
            <>
              <div className={styles.each_li_div}>
                {eachLink.onclick ?
                  <>
                    <li> <NavLink to={`${eachLink.path}`} onClick={eachLink.func} > {eachLink.name} </NavLink> </li>
                  </>
                  :
                  <>
                    <li> <NavLink to={`${eachLink.path}`}> {eachLink.name} </NavLink> </li>
                  </>
                }
              </div>
            </>
          ))}
        </nav>
      </div>

    </>
  )

};



export default NavBar;
