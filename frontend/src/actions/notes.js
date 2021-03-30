



import { GET_SPECIFIC_NOTE } from '../types/notes.js';







const getSpecificNote = (notes) => {
  return {
    type: GET_SPECIFIC_NOTE,
    notes
  };
};








export {
  getSpecificNote,

}
