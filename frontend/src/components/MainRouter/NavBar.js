// imports here:
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_logoutUser, thunk_loginDemoUser } from '../../thunks/session.js';



// component definitions here:
function NavBar() {
    const dispatch = useDispatch();
    const isUser = useSelector((store) => store.userReducer.user);


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

                { isUser === null ? <li> <NavLink activeClassName='selected' exact to='/login'> Login </NavLink> </li> : <div></div> }

                { isUser === null ? <li> <NavLink activeClassName='selected' exact to='/signup'> Signup </NavLink> </li> : <div></div> }

                { isUser === null ? <div></div> : <li> <NavLink activeClassName='selected' exact to='/profile'> Profile </NavLink> </li> }

                { isUser === null ? <div></div> : <li> <a onClick={logoutHandler}> Logout </a> </li> }

                { isUser === null ? <li> <a onClick={demoLoginHandler} > Demo </a> </li> : <div> </div> }

            </ul>
        </nav>
        </>
    );
}




// exports here:
export default NavBar;
