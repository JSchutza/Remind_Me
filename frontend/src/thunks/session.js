// holds all the thunk functions for the session


// import action creators here
import { loginUser, checkForUser, logoutUser, signupUser, loginDemoUser } from '../actions/session.js';
import { setError, clearError } from "../actions/error.js";

// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';






// thunks here
const thunk_checkIfThereIsAUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/users/');

    if(response.ok) {
        const the_user = await response.json();
        dispatch(checkForUser(the_user));
        return;
    }
    throw response;
};












const thunk_login = ({ credential, password }, history) => async (dispatch) => {

    const response = await csrfFetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });

    const the_user = await response.json();
    if (!the_user.errors) {
        dispatch(clearError());
        dispatch(loginUser(the_user));
        history.push('/profile');
        return;
    }
    // dispatch error handler here
    dispatch(setError(the_user.errors));
};




const thunk_logoutUser = (history) => async (dispatch) => {
    const response = await csrfFetch('/api/users/logout', { method: 'DELETE' });

    if(response.ok){
        const the_user = await response.json();
        dispatch(logoutUser(the_user));
        history.push('/');
        return;
    }
    throw response;
};




const thunk_signupUser = ({ email, password, username }, history) => async (dispatch) => {

    const response = await csrfFetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, username })
    });

    const the_user = await response.json();
    if(!the_user.errors) {
        dispatch(clearError());
        dispatch(signupUser(the_user));
        dispatch(thunk_checkIfThereIsAUser());
        history.push('/profile');
        return;
    }
    // dispatch error handler here
    dispatch(setError(the_user.errors));
};



const thunk_loginDemoUser = (history) => async (dispatch) => {
    const credential = 'demo-user';
    const password = 'password';

    const response = await csrfFetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });

    if(response.ok){
        const the_user = await response.json();
        dispatch(loginDemoUser(the_user));
        history.push('/profile');
        return;
    }
    throw response;
};



// exports here
export {
    thunk_checkIfThereIsAUser,
    thunk_login,
    thunk_logoutUser,
    thunk_signupUser,
    thunk_loginDemoUser,


};
