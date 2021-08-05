



import { GET_NOTEBOOKS, NOTEBOOK_FOR_PAGE, CREATE_NEW_NOTEBOOK, DELETE_NOTEBOOK, UPDATE_NOTEBOOK } from '../types/notebooks.js';





// reducers here
const notebooksReducer = (state = { notebooks: null }, action) => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { notebooks: { ...state.notebooks, [action.notebook?.notebook?.id]: action.notebook?.notebook } };

    case DELETE_NOTEBOOK:
      const id = action.notebookId;
      delete state.notebooks[id];
      return { notebooks: { ...state.notebooks } };

    case UPDATE_NOTEBOOK:
      return { notebooks: { ...state.notebooks, [action.notebook.notebook.id]: action.notebook.notebook } };

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
