

import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE, CREATE_NEW_NOTEBOOK, DELETE_NOTEBOOK, UPDATE_NOTEBOOK, GET_LIMIT_NOTEBOOKS } from '../types/notebooks.js';





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


const deleteNotebook = (notebookId, notebook) => {
  return {
    type: DELETE_NOTEBOOK,
    notebookId,
    notebook
  };
};


const updateNotebook = (notebook) => {
  return {
    type: UPDATE_NOTEBOOK,
    notebook
  };
};



const getLimitedNotebooks = (notebooks) => ({
  type: GET_LIMIT_NOTEBOOKS,
  notebooks
});


export {
  getNoteBooks,
  notebookForPage,
  createNewNotebook,
  deleteNotebook,
  updateNotebook,
  getLimitedNotebooks,


};
