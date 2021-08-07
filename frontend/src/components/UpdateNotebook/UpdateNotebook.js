import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { thunk_updateNotebook } from "../../thunks/notebooks.js";





const UpdateNotebook = ({ notebookId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUpdate = event => {
    event.preventDefault();
    dispatch();
  }



  return (
    <>
    </>
  )

};




export default UpdateNotebook;
