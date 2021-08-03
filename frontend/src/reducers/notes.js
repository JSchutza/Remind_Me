

import { GET_SPECIFIC_NOTE, MOST_RECENT_NOTES, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../types/notes.js';











// reducers here
const notesReducer = (state = { notes: null }, action) => {
  switch (action.type) {
    case GET_SPECIFIC_NOTE:
      if (action.notes.notes.length === 0){
        return state;
      } else {
        return { ...state, notes: { ...action.notes.notes } };
      }
    case CREATE_NOTE:
      return { notes: { ...state.notes, [action.note.note.id]: action.note.note } }
    case DELETE_NOTE:
      const id = action.noteId;
      delete state.notes[id];
      return { ...state };
    default:
      return state;
  }
};



const recentNoteReducer = (state = null, action) => {
  switch (action.type){
    case MOST_RECENT_NOTES:
      if(action.count <= 5) {
      return { ...state, [action.count]: { ...action.note }};
    } else {
      return null;
    }
    default:
      return state;
  }
};



const recentlyCreatedNoteReducer = (state = { note: null }, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, ...action.note };
    case UPDATE_NOTE:
      return { ...state, ...action.note };
    default:
      return state;
  }
};


const recentlyDeletedNoteReducer = (state = { note: null}, action) => {
  switch (action.type){
    case DELETE_NOTE:
      return { ...state, ...action.note };
    default:
      return state;
  }
};




// exports here
export {
  notesReducer,
  recentNoteReducer,
  recentlyCreatedNoteReducer,
  recentlyDeletedNoteReducer,


};
