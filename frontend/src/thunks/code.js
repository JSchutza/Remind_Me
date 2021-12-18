


import { getCode } from "../actions/code.js";
import { setError, clearError } from '../actions/error.js';


import { csrfFetch } from '../store/csrf.js';


const thunk_getCode = ({ language, script }) => async (dispatch) => {
    const response = await csrfFetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ language, script }),
    });

    const code = await response.json();
    if (!code.errors) {
      dispatch(clearError());
      dispatch(getCode(code));
      return true;
    }

    dispatch(setError(code.errors));
  };



export {
  thunk_getCode,

}
