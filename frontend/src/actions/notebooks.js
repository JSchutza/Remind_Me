

import { GET_NOTEBOOKS } from '../types/notebooks.js';





const getNoteBooks = (notebooks) => {
  return {
    type: GET_NOTEBOOKS,
    notebooks
  };
};


export {
  getNoteBooks,

};
