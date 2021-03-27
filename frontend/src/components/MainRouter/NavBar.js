// imports here:
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_logoutUser } from '../../thunks/session.js';
import { useState, useEffect } from 'react';

// component definitions here:
function NavBar({ isUser }) {
    // state here
    const dispatch = useDispatch();

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_logoutUser());
    };



    return (
        <>
            <nav>
                <ul>

                    <li>
                        <NavLink activeClassName='selected' exact to='/'>
                            Home
                        </NavLink>
                    </li>


                    <li>
                        <NavLink activeClassName='selected' exact to='/login'>
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName='selected' exact to='/signup'>
                            Signup
                        </NavLink>
                    </li>

                    {
                        isUser === null ? <div></div> : <li> <a onClick={logoutHandler}> Logout </a> </li>
                    }

                </ul>
            </nav>
        </>
    );
}




// exports here:
export default NavBar;
