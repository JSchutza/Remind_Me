import { getNoteBooks, notebookForPage, createNewNotebook, deleteNotebook, updateNotebook, getLimitedNotebooks } from '../actions/notebooks.js';
import { setError, clearError } from "../actions/error.js";


import { csrfFetch } from '../store/csrf.js';





const thunk_getNoteBooks = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notebooks/${userId}`);

  if (response.ok) {
    const notebooks = await response.json();
    dispatch(getNoteBooks(notebooks));
    return;
  }
  throw response;
};






const thunk_notebookForPage = (notebookId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notebooks/specific/${notebookId}`);

  if (response.ok) {
    const notebook = await response.json();
    dispatch(notebookForPage(notebook));
    return;
  }
  throw response;

};






// POST localhost:5000/api/notebooks/new
const thunk_createNewNotebook = ({ name, description, notebook_owner }) => async (dispatch) => {

  const response = await csrfFetch('/api/notebooks/new', {
    method: 'POST',
    body: JSON.stringify({ name, description, notebook_owner })
  });


  const notebook = await response.json();
  if (!notebook.errors) {
    dispatch(clearError());
    dispatch(createNewNotebook(notebook));
    return true;
  }

  dispatch(setError(notebook.errors));

};







// PUT localhost:5000/api/notebooks/:notebookId/update
const thunk_updateNotebook = ({ name, description, notebookId }) => async (dispatch) => {

  const response = await csrfFetch(`/api/notebooks/${notebookId}/update`, {
    method: 'PUT',
    body: JSON.stringify({ name, description })
  });

  const notebook = await response.json();
  if (!notebook.errors){
    dispatch(clearError());
    dispatch(updateNotebook(notebook));
    return true;
  }

  dispatch(setError(notebook.errors));

};








// DELETE localhost:5000/api/notebooks/:notebookId/remove
const thunk_deleteNotebook = (notebookId) => async (dispatch) => {

  const response = await csrfFetch(`/api/notebooks/${notebookId}/remove`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const notebook = await response.json();
    dispatch(deleteNotebook(notebookId, notebook));
    return;
  }
  throw response;
};








// GET localhost:5000/api/notebooks/limit/:amount/:notebookOwner
const thunk_getLimitedNotebooks = (amount, notebookOwner) => async (dispatch) => {

  const response = await csrfFetch(`/api/notebooks/limit/${amount}/${notebookOwner}`);

  if (response.ok) {
    const notebooks = await response.json();
    dispatch(getLimitedNotebooks(notebooks));
    return;
  }
  throw response;
};





export {
  thunk_getNoteBooks,
  thunk_notebookForPage,
  thunk_createNewNotebook,
  thunk_deleteNotebook,
  thunk_updateNotebook,
  thunk_getLimitedNotebooks,

};
