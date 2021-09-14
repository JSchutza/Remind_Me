

import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { thunk_createNewNotebook } from "../../thunks/notebooks.js";

import { useUser } from "../../context/UserContext.js";


import styles from './createnotebookform.module.css';

import Error from "../Error";


const CreateNotebookForm = ({ notebookId, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [error, setError] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);
  const dispatch = useDispatch();
  const { isUser } = useUser();




  useEffect(() => {
    if (errors !== null) {
      setError(errors)
    }
  }, [errors]);




  const onSubmit = async event => {
    event.preventDefault();
    const payload = { name, description, notebook_owner: isUser.id };
    const success = await dispatch(thunk_createNewNotebook(payload));
    if (success) {
      closeModal();
    }
  };





  return (
    <>

      <Error error={error} />


      <div className={styles.createnotebook_wrap}>
        <form className={styles.createnotebook_form} onSubmit={onSubmit} >
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
      </div>
    </>
  )
};



export default CreateNotebookForm;
