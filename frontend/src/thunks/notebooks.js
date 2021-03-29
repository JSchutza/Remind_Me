import { getNoteBooks } from '../actions/notebooks.js';



import { csrfFetch } from '../store/csrf.js';



const thunk_getNoteBooks = () => async (dispatch) => {
  const response = await csrfFetch('/api/notebooks');

  if (response.ok) {
    const the_notebooks = await response.json();
    dispatch(getNoteBooks(the_notebooks));
    return;
  }
  throw response;
};


export {
  thunk_getNoteBooks,

};
