// holds all of the reducers for the session


// import types here
import { LOGIN_USER, CHECK_USER, LOGOUT_USER, LOGIN_DEMO } from '../types/session.js';






// reducers here
const userReducer = (state={ user: null }, action) => {
    switch (action.type) {
        case CHECK_USER:

            if (action.user.user === null) {
                return { ...state, user: null };
            }
            return { ...state, user: { ...action.user.user } };

        case LOGIN_USER:
            return { ...state, user: { ...action.user.user } };

        case LOGOUT_USER:
            return { ...state, user: null };

        case LOGIN_DEMO:
            return { ...state, user: { ...action.user.user } };

        default:
            return state;
    }
};




// exports here
export {
    userReducer,
};
