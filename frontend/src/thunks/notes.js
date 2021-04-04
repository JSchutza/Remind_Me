



import { getSpecificNote, createNewNote, updateNote } from '../actions/notes.js';


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








const thunk_createNewNote = (form_info) => async (dispatch) => {
  const { due_date, title, content, notebook_id } = form_info;

  const response = await csrfFetch(`/api/notes/new`, {
    method: 'POST',
    body: JSON.stringify({ due_date, title, content, notebook_id })
  });

  if (response.ok) {
    const note = await response.json();
    dispatch(createNewNote(note));
    return;
  }
  throw response;
};




// /api/notes/:noteId/update
const thunk_updateNote = (form_info) => async (dispatch) => {
  const { due_date, title, content, notebook_id, noteId } = form_info;

  const response = await csrfFetch(`/api/notes/${noteId}/update`, {
    method: 'PUT',
    body: JSON.stringify({ due_date, title, content, notebook_id })
  });

  if (response.ok) {
    const note = await response.json();
    dispatch(updateNote(note));
    return;
  }
  throw response;
};


export {
  thunk_getSpecificNote,
  thunk_createNewNote,
  thunk_updateNote,

}
