




import { getUsersTags } from '../actions/tags.js';



import { csrfFetch } from '../store/csrf.js';




const thunk_getUsersTags = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/tags/users/${userId}`);

  if (response.ok) {
    const their_tags = await response.json();
    dispatch(getUsersTags(their_tags));
    return;
  }
  throw response;

};




export {
  thunk_getUsersTags,


}
