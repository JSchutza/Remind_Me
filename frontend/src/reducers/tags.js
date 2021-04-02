



import { GET_USERS_TAGS } from '../types/tags.js';




const initialState = { their_tags: null };
// reducers here
const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_TAGS:
      return { ...state, ...action.their_tags };
    default:
      return state;
  }
};





// exports here
export {
  tagsReducer,

};
