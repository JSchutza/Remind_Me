

// import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { thunk_deleteNotebook } from "../../thunks/notebooks.js";


const DeleteNotebook = ({ notebookId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteNotebook(notebookId));
    history.push("/profile");
  }


  return (
    <>
      <div>
        <Link to={'/'} onClick={event => handleDelete(event)}> Delete </Link>
      </div>
    </>
  )
};

export default DeleteNotebook;
