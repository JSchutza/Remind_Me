import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_updateNotebook } from "../../thunks/notebooks.js";
import Error from "../Error";
import styles from './updatenotebookform.module.css';
import {doc, updateDoc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData} from "reactfire";
import {getAuth} from "firebase/auth";




const UpdateNotebookForm = ({ notebookId, closeModal, notebook }) => {
  const [ name, setName ] = useState(notebook.name);
  const [ description, setDescription ] = useState(notebook.description);
  const [ error, setError ] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);
  const dispatch = useDispatch();
  // get the firestore document reference
  const notebooksRef = doc(useFirestore(), "Notebooks", "mOLtamIAoHyjhdrvBjhv")
  // subscribe to the document for realtime updates.
  const { status: notebooksStatus, data: notebooksData } = useFirestoreDocData(notebooksRef)
  const app = useFirebaseApp()
  const auth = getAuth(app)




  useEffect(() => {
    if (errors !== null) {
      setError(errors)
    }
  }, [errors]);






  const onSubmit = async event => {
    event.preventDefault();
    const updatedNotebook = { name, description, "id": notebookId };
    const userId = auth.currentUser?.uid

    const oldNotebooks = notebooksData?.Notebooks?.[userId]
    oldNotebooks.forEach((eachNotebook) => {
      if (Number(eachNotebook.id) === Number(notebookId)) {
        eachNotebook.name = name
        eachNotebook.description = description
        eachNotebook.id = notebookId
      }
    })
    delete notebooksData?.Notebooks?.[userId]
    const payload = { Notebooks: { [userId]: oldNotebooks, ...notebooksData?.Notebooks } };
    updateDoc(notebooksRef, payload)
    closeModal();
    // const success = await dispatch(thunk_updateNotebook(payload));
  }






  return (
    <>
      <div className={styles.updatenotebook_container} >
        <Error error={error} />



    <div className={styles.updatenotebook_wrap} >
      <form className={styles.updatenotebook_form} onSubmit={onSubmit} >
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder='Name'
            aria-label='Name'
          />
        </label>
        <br />


        <label>
          Description
            <input
              type="text"
              value={description}
              onChange={event => setDescription(event.target.value)}
              placeholder='Description'
              aria-label='Description'
            />
        </label>
          <br />

        <button type="submit" > Update </button>
      </form>
      </div>
      </div>
    </>
  )
};



export default UpdateNotebookForm;
