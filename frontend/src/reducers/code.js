

import { GET_CODE } from "../types/code.js";



const codeEvalReducer = (state = { code: null }, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, code: action.code };
    default:
      return state;
  }
}



export { codeEvalReducer, };
