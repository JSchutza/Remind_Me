

import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE } from '../types/notebooks.js';





const getNoteBooks = (notebooks) => {
  return {
    type: GET_NOTEBOOKS,
    notebooks
  };
};



const notebookForPage = (notebook) => {
  return {
    type: NOTEBOOK_FOR_PAGE,
    notebook
  }
};


export {
  getNoteBooks,
  notebookForPage,

};
