



import { getSpecificNote } from '../actions/notes.js';


import { csrfFetch } from '../store/csrf.js';



const thunk_getSpecificNote = (notebookId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/${notebookId}`);

  if (response.ok) {
    const notes = await response.json();
    dispatch(getSpecificNote(notes));
    return;
  }
  throw response;

};



export {
  thunk_getSpecificNote,

}
