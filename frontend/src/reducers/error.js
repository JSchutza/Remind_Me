




import { SET_ERROR } from "../types/error.js";





const errorReducer = (state = { errors: null }, action) => {
  switch (action.type){
    case SET_ERROR:
      return { ...state, errors: [...action.errors ] };
    default:
      return state;
  }

};





export {
  errorReducer,

}
