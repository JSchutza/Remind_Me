



import { GET_NOTEBOOKS } from '../types/notebooks.js';


const initialState = { notebooks: null };





// reducers here
const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return { ...state, ...action.notebooks };
    default:
      return state;
  }
};




// exports here
export {
  notebooksReducer,
};
