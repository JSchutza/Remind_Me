




import { SET_ERROR, CLEAR_ERROR, SET_UPDATE_NOTE_ERROR, CLEAR_UPDATE_ERROR } from "../types/error.js";




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



const noteErrorReducer = (state = { errors: null }, action) => {
  switch (action.type){
    case SET_UPDATE_NOTE_ERROR:
      return { ...state, errors: [...action.errors ] };

    case CLEAR_UPDATE_ERROR:
      return { ...state, errors: null };

    default:
      return state;
  }

};





export {
  errorReducer,
  noteErrorReducer,

}
