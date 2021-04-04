

import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE, CREATE_NEW_NOTEBOOK, DELETE_NOTEBOOK } from '../types/notebooks.js';





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
  };
};



const createNewNotebook = (just_created) => {
  return {
    type: CREATE_NEW_NOTEBOOK,
    just_created
  };
};


const deleteNotebook = (notebook) => {
  return {
    type: DELETE_NOTEBOOK,
    notebook
  };
};



export {
  getNoteBooks,
  notebookForPage,
  createNewNotebook,
  deleteNotebook,


};
