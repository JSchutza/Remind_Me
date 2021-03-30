



import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE } from '../types/notebooks.js';




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




// exports here
export {
  notebooksReducer,
  notebookPageReducer,

};
