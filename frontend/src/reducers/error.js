




import { SET_ERROR, CLEAR_ERROR } from "../types/error.js";





const errorReducer = (state = { errors: null }, action) => {
  switch (action.type){
    case SET_ERROR:
      return { ...state, errors: [...action.errors ] };

    case CLEAR_ERROR:
      return { ...state, errors: null };

    default:
      return state;
  }

};





export {
  errorReducer,

}
