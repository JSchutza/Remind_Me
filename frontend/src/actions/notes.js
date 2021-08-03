



import { GET_SPECIFIC_NOTE, MOST_RECENT_NOTES, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../types/notes.js';
import { count } from '../lib';






const getSpecificNote = (notes) => {
  return {
    type: GET_SPECIFIC_NOTE,
    notes
  };
};



const mostRecentNotes = (note) => {
  return {
    type: MOST_RECENT_NOTES,
    count: count(),
    note
  };
};


const createNewNote = (note) => {
  return {
    type: CREATE_NOTE,
    note
  }
};


const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    note
  };
};




const deleteNote = (noteId, note) => {
  return {
    type: DELETE_NOTE,
    noteId,
    note
  };
};




export {
  getSpecificNote,
  mostRecentNotes,
  createNewNote,
  updateNote,
  deleteNote,


}
