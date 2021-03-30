import { getNoteBooks, notebookForPage } from '../actions/notebooks.js';



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









export {
  thunk_getNoteBooks,
  thunk_notebookForPage,

};
