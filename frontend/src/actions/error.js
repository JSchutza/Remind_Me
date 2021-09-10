


import { SET_ERROR, CLEAR_ERROR } from "../types/error.js";




const setError = (errors) => ({
  type: SET_ERROR,
  errors
});



const clearError = () => ({
  type: CLEAR_ERROR,
});




export {
  setError,
  clearError,

}
