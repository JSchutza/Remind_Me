

import { useUser } from '../../context/UserContext.js';

import { NavLink } from 'react-router-dom';


const NavBar = () => {

  const { isUser } = useUser();

  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <nav>
          <li></li>
        </nav>
      </>
    )

  }

  // if the user is NOT logged in
  return (
    <>
      <nav>
        <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li> <NavLink to={'/profile'}> Profile </NavLink> </li>
      </nav>
    </>
  )

};



export default NavBar;
