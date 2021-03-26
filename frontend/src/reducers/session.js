// holds all of the reducers for the session


// import types here
import { LOGIN_USER } from '../types/session.js';


// reducers here
const userReducer = (state={}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                [action.user.id]: action.user
            };
        default:
            return state;
    }
};




// exports here
export {
    userReducer,
};
