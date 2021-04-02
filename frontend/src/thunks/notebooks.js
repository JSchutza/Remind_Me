import { getNoteBooks, notebookForPage, createNewNotebook } from '../actions/notebooks.js';



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




const thunk_createNewNotebook = (form_info) => async (dispatch) => {
  const { name, description, notebook_owner } = form_info;

  const response = await csrfFetch('/api/notebooks/new', {
    method: 'POST',
    body: JSON.stringify({ name, description, notebook_owner })
  });


  if (response.ok) {
    const notebook = await response.json();
    dispatch(createNewNotebook(notebook));
    return;
  }
  throw response;
};




export {
  thunk_getNoteBooks,
  thunk_notebookForPage,
  thunk_createNewNotebook,

};
