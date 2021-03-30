



import { GET_SPECIFIC_NOTE } from '../types/notes.js';



const getSpecificNote = (note) => {
  return {
    type: GET_SPECIFIC_NOTE,
    note
  };
};


export {
  getSpecificNote,

}
