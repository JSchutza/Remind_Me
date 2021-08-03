import { getNoteBooks, notebookForPage, createNewNotebook, deleteNotebook, updateNotebook } from '../actions/notebooks.js';



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




const thunk_createNewNotebook = ({ name, description, notebook_owner }) => async (dispatch) => {

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


const thunk_updateNotebook = ({ name, description, notebookId }) => async (dispatch) => {

  const response = await csrfFetch('/api/notebooks/${notebookId}/update', {
    method: 'PUT',
    body: JSON.stringify({ name, description })
  });

  if(response.ok){
    const notebook = await response.json();
    dispatch(updateNotebook(notebook));
    return;
  }
  throw response;
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


export {
  thunk_getNoteBooks,
  thunk_notebookForPage,
  thunk_createNewNotebook,
  thunk_deleteNotebook,
  thunk_updateNotebook,

};
