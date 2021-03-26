// holds all of the action creators for the session

// import types here
import { LOGIN_USER } from '../types/session.js';

// action creators here
const loginUser = (the_user) => {
    return {
        type: LOGIN_USER,
        user: the_user
    };
};




// exports here
export {
    loginUser
};
