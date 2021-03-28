// imports here:
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_logoutUser, thunk_loginDemoUser } from '../../thunks/session.js';






// component definitions here:
function NavBar() {
    const dispatch = useDispatch();


    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_logoutUser());
    };


    const demoLoginHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_loginDemoUser());
    };

    return (
        <>
        <nav>
            <ul>

                <li> <NavLink activeClassName='selected' exact to='/'> Home </NavLink> </li>


                    <li> <NavLink activeClassName='selected' exact to='/login'> Login </NavLink> </li>

                    <li> <NavLink activeClassName='selected' exact to='/signup'> Signup </NavLink> </li>

                    <li> <NavLink activeClassName='selected' exact to='/profile'> Profile </NavLink> </li>

                    <li> <a onClick={logoutHandler}> Logout </a> </li>

                    <li> <a onClick={demoLoginHandler} > Demo </a> </li>

            </ul>
        </nav>
        </>
    );
}




// exports here:
export default NavBar;
