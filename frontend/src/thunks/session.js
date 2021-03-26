// holds all the thunk functions for the session

// import action creators here
import { loginUser } from '../actions/session.js';

// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';






// thunks here
const thunk_login = (form_info) => async (dispatch) => {
    const { credential, password } = form_info;

    const response = await csrfFetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });

    if(response.ok) {
        const the_user = await response.json();
        dispatch(loginUser(the_user));
    }
    throw response;
};







// exports here
export {
    thunk_login,

};
