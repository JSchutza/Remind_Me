// holds all of the reducers for the session


// import types here
import { LOGIN_USER, CHECK_USER, LOGOUT_USER } from '../types/session.js';


// make the initalState
const initialState = { user: null };


// reducers here
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_USER:
            return { ...state, user: action.user };
        case LOGIN_USER:
            return { ...state, user: action.user };
        case LOGOUT_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
};




// exports here
export {
    userReducer,
};
