

import { GET_SPECIFIC_NOTE, MOST_RECENT_NOTES } from '../types/notes.js';




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



const recentNoteReducer = (state = null, action) => {
  switch (action.type){
    case MOST_RECENT_NOTES:
      if(action.count <= 5) {
      // console.log(action.count);
      return { ...state, [action.count]: { ...action.note }};
    } else {
      return state;
    }
    default:
      return state;
  }
};



// exports here
export {
  notesReducer,
  recentNoteReducer,


};
