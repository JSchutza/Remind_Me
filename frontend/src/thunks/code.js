


import { getCode } from "../actions/code.js";
import { setError, clearError } from '../actions/error.js';



const thunk_getCode = ({ language, script }) => async (dispatch) => {
    const response = await fetch('/api/code', {
      method: 'GET',
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
