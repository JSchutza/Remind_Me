

import { useState } from 'react';

import { useDispatch } from 'react-redux';






const CreateNotebookForm = ({ notebookId }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const payload = { name, description, notebookId };
    // dispatch(thunk_updateNotebook(payload));
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

        <button type="submit" > Update </button>
      </form>
    </>
  )
};

export default CreateNotebookForm;
