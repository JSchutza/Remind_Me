
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';

import { thunk_deleteNotebook } from "../../thunks/notebooks.js";




const DeleteNotebook = ({ notebookId }) => {
  // const dispatch = useDispatch();


  const handleDelete = event => {
    event.preventDefault();
    // dispatch(thunk_deleteNotebook(notebookId));
  }


  return (
    <div>
      <Link to={'/'} onClick={event => handleDelete(event)}> Delete </Link>
    </div>
  )
};

export default DeleteNotebook;
