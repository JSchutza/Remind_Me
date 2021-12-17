

import { GET_CODE } from "../types/code.js";



const codeEvalReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, }
    default:
      return state;
  }
}



export { codeEvalReducer, };
