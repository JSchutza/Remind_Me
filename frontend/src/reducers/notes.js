

import { GET_SPECIFIC_NOTE } from '../types/notes.js';




const initialState = { notes: null };





// reducers here
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_NOTE:
      return { ...state, notes: { ...action.notes.notes } };
    default:
      return state;
  }
};




// exports here
export {
  notesReducer,

};
