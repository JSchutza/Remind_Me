// imports here:
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_logoutUser, thunk_loginDemoUser } from '../../thunks/session.js';
import { useUser } from '../../context/UserContext.js';
import { useHistory } from 'react-router-dom';




// component definitions here:
function NavBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isUser } = useUser();

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_logoutUser());
        history.push('/login');
    };


    const demoLoginHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_loginDemoUser());
        history.push('/profile');
    };


    // if there is not a user
    if(isUser === null) {
        return (
        <>
        <nav>
            <ul>

            <li> <NavLink activeClassName='selected' exact to='/'> Home </NavLink> </li>

            <li> <NavLink activeClassName='selected' exact to='/login'> Login </NavLink> </li>

            <li> <NavLink activeClassName='selected' exact to='/signup'> Signup </NavLink> </li>

            <li> <a onClick={demoLoginHandler} > Demo </a> </li>

            </ul>
        </nav>
        </>
        );
    }
    // if there is a user
    return (
    <>
    <nav>
        <ul>

            <li> <NavLink activeClassName='selected' exact to='/'> Home </NavLink> </li>

            <li> <NavLink activeClassName='selected' exact to='/profile'> Profile </NavLink> </li>

            <li> <a onClick={logoutHandler}> Logout </a> </li>

        </ul>
    </nav>
    </>
    );




}




// exports here:
export default NavBar;
