
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { thunk_updateNotebook } from "../../thunks/notebooks.js";





const UpdateNotebookForm = () => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();


  const onSubmit = event => {
    event.preventDefault();

  }

  return (
    <>
      <form onSubmit={onSubmit} >

      </form>
    </>
  )
};



export default UpdateNotebookForm;
