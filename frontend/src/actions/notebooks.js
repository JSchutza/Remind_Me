

import { GET_NOTEBOOKS } from '../types/notebooks.js';





const getNoteBooks = (the_notebooks) => {
  return {
    type: GET_NOTEBOOKS,
    the_notebooks
  };
};


export {
  getNoteBooks,

};
