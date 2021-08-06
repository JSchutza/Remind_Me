

import { useUser } from '../../context/UserContext.js';
import { NavLink, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';


import { thunk_loginDemoUser, thunk_logoutUser } from '../../thunks/session.js';





const NavBar = () => {
  const { isUser } = useUser();
  const history = useHistory();
  const dispatch = useDispatch();


  const loginDemoUser = event => {
    event.preventDefault();
    dispatch(thunk_loginDemoUser());
    history.push('/profile');
  }


  const logoutUser = event => {
    event.preventDefault();
    dispatch(thunk_logoutUser());
    history.push('/');
  }




  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <nav>
          <li> <NavLink to={'/'}> Home </NavLink> </li>
          <li> <NavLink to={'/profile'}> Profile </NavLink> </li>
          <li> <NavLink to={'/notebooks'}> Notebooks </NavLink> </li>
          <li> <NavLink to={'/'} onClick={event => logoutUser(event)} > Logout </NavLink> </li>

        </nav>
      </>
    )

  }

  // if the user is NOT logged in
  return (
    <>
      <nav>
        <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li> <NavLink to={'/login'}> Login </NavLink> </li>
        <li> <NavLink to={'/signup'}> Sign Up </NavLink> </li>
        <li> <NavLink to={'/'} onClick={event => loginDemoUser(event)}> Demo </NavLink> </li>
      </nav>
    </>
  )

};



export default NavBar;
