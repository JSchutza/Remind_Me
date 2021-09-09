
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { thunk_updateNotebook } from "../../thunks/notebooks.js";


import styles from './updatenotebookform.module.css';




const UpdateNotebookForm = ({ notebookId, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();


  const onSubmit = event => {
    event.preventDefault();
    const payload = { name, description, notebookId };
    dispatch(thunk_updateNotebook(payload));
    closeModal();
  }




  return (
    <>
    <div className={styles.updatenotebook_wrap} >
      <form className={styles.updatenotebook_form} onSubmit={onSubmit} >
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
      </div>
    </>
  )
};



export default UpdateNotebookForm;
