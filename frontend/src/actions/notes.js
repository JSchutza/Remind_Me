



import { GET_SPECIFIC_NOTE, MOST_RECENT_NOTES } from '../types/notes.js';
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




export {
  getSpecificNote,
  mostRecentNotes,

}
