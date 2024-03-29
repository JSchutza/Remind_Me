



import { getSpecificNote, createNewNote, updateNote, deleteNote } from '../actions/notes.js';
import { setError, clearError, setUpdateNoteError, clearUpdateNoteError } from "../actions/error.js";

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







// POST localhost:5000/api/notes/new
const thunk_createNewNote = ({ due_date, title, content, notebook_id }) => async (dispatch) => {

  const response = await csrfFetch(`/api/notes/new`, {
    method: 'POST',
    body: JSON.stringify({ due_date, title, content, notebook_id })
  });

  const note = await response.json();
  if (!note.errors) {
    dispatch(clearError());
    dispatch(createNewNote(note));
    return true;
  }


  dispatch(setError(note.errors));

};




// PUT localhost:5000/api/notes/:noteId/update
const thunk_updateNote = ({ due_date, title, content, notebook_id, noteId }) => async (dispatch) => {

  const response = await csrfFetch(`/api/notes/${noteId}/update`, {
    method: 'PUT',
    body: JSON.stringify({ due_date, title, content, notebook_id })
  });

  const note = await response.json();
  if (!note.errors) {
    dispatch(clearUpdateNoteError());
    dispatch(updateNote(note));
    return true;
  }

  dispatch(setUpdateNoteError(note.errors));

};




// DELETE  /api/notes/:noteId/delete
const thunk_deleteNote = (noteId, notebook_id) => async (dispatch) => {
  const response = await csrfFetch(`/api/notes/${noteId}/delete`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const note = await response.json();
    dispatch(deleteNote(noteId, note));
    return;
  }
  throw response;

};






export {
  thunk_getSpecificNote,
  thunk_createNewNote,
  thunk_updateNote,
  thunk_deleteNote,

}
