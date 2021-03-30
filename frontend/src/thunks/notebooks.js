import { getNoteBooks } from '../actions/notebooks.js';



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


export {
  thunk_getNoteBooks,

};
