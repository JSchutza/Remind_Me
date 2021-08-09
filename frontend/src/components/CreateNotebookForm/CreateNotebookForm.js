

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { thunk_createNewNotebook } from "../../thunks/notebooks.js";

import { useUser } from "../../context/UserContext.js";




const CreateNotebookForm = ({ notebookId, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const dispatch = useDispatch();
  const { isUser } = useUser();



  const onSubmit = event => {
    event.preventDefault();
    const payload = { name, description, notebook_owner: isUser.id };
    dispatch(thunk_createNewNotebook(payload));
    closeModal();
  }





  return (
    <>
      <form onSubmit={onSubmit} >
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </label>

        <button type="submit" > Create </button>
      </form>
    </>
  )
};



export default CreateNotebookForm;
