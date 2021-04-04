



import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE, CREATE_NEW_NOTEBOOK, DELETE_NOTEBOOK } from '../types/notebooks.js';




const initialState = { notebooks: null };
// reducers here
const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { ...state, notebooks: { ...action.notebooks.notebooks } };
    default:
      return state;
  }
};




const notebookPageReducer = (state = { notebook: null }, action) => {
  switch (action.type) {
    case NOTEBOOK_FOR_PAGE:
      return { ...state, notebook: { ...action.notebook.notebook } };
    default:
      return state;
  }
};



const newNotebookReducer = (state = { just_created: null }, action) => {
  switch (action.type){
    case CREATE_NEW_NOTEBOOK:
      return { ...state, ...action.just_created };
    default:
      return state;
  };
};


const deleteNotebookReducer = (state = { notebook: null }, action) => {
  switch (action.type){
    case DELETE_NOTEBOOK:
      return { ...state, ...action.notebook };
    default:
      return state;
  };
};


// exports here
export {
  notebooksReducer,
  notebookPageReducer,
  newNotebookReducer,
  deleteNotebookReducer,

};
