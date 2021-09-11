
import { useState, useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';

import { thunk_updateNotebook } from "../../thunks/notebooks.js";


import styles from './updatenotebookform.module.css';




const UpdateNotebookForm = ({ notebookId, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ error, setError ] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);
  const dispatch = useDispatch();



  useEffect(() => {
    if (errors !== null) {
      setError(errors)
    }
  }, [errors]);






  const onSubmit = async event => {
    event.preventDefault();
    const payload = { name, description, notebookId };
    const success = await dispatch(thunk_updateNotebook(payload));
    if (success) {
      closeModal();
    }
  }





  return (
    <>
      <div>
        {error.map(eachError => (
          <li> {eachError}</li>
        ))}
      </div>

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
