


import { SET_ERROR, CLEAR_ERROR, SET_UPDATE_NOTE_ERROR, CLEAR_UPDATE_ERROR } from "../types/error.js";




const setError = (errors) => ({
  type: SET_ERROR,
  errors
});



const clearError = () => ({
  type: CLEAR_ERROR,
});




const setUpdateNoteError = (errors) => ({
  type: SET_UPDATE_NOTE_ERROR,
  errors
});



const clearUpdateNoteError = () => ({
  type: CLEAR_UPDATE_ERROR,
});




export {
  setError,
  clearError,
  setUpdateNoteError,
  clearUpdateNoteError,


}
