

import { GET_CODE, RESET_CODE } from '../types/code.js';



const codeEvalReducer = (state = { code: null }, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, code: action.code };
    case RESET_CODE:
      return { ...state, code: null };
    default:
      return state;
  }
}



export { codeEvalReducer, };
