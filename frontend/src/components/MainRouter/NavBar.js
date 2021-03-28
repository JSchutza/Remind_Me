// imports here:
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_logoutUser } from '../../thunks/session.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';

// component definitions here:
function NavBar({ isUser }) {
    // state here
    const [ showConfirmation, setShowConfirmation ] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_logoutUser());
        // set state to show a confirmation of logout component
        setShowConfirmation(true);

        setTimeout(() => {
            setShowConfirmation(false);
        }, 1000);

        setTimeout(() => {
            setShowConfirmation(true);
        }, 1300);

        setTimeout(() => {
            setShowConfirmation(false);
            history.push('/login');
        }, 3000);


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

            </ul>
        </nav>

            { showConfirmation ? <Loader the_message={`Logging you out`}/> : <div></div> }
        </>
    );
}




// exports here:
export default NavBar;
