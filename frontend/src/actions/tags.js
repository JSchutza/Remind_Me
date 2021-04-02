




import { GET_USERS_TAGS } from '../types/tags.js';



const getUsersTags = (their_tags) => {
  return {
    type: GET_USERS_TAGS,
    their_tags
  }
};




export {
  getUsersTags,

}
