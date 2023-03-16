import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import styles from './createnotebookform.module.css';
import Error from "../Error";
import {doc, updateDoc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData} from "reactfire";
import {getAuth} from "firebase/auth";



const CreateNotebookForm = ({ notebookId, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [error, setError] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);
  // get the firestore document reference
  const notebooksRef = doc(useFirestore(), "Notebooks", "mOLtamIAoHyjhdrvBjhv")
  // subscribe to the document for realtime updates.
  const { status: notebooksStatus, data: notebooksData } = useFirestoreDocData(notebooksRef)
  // get the firestore document reference
  const notesRef = doc(useFirestore(), "Notes", "WeJNP1GkfLig2GQdQ4ED")
  // subscribe to the document for realtime updates.
  const { status: notesStatus, data: notesData } = useFirestoreDocData(notesRef)

  const app = useFirebaseApp()
  const auth = getAuth(app)



  useEffect(() => {
    if (errors !== null) {
      setError(errors)
    }
  }, [errors]);



  const onSubmit = async event => {
    event.preventDefault();
    const userId = auth.currentUser?.uid
    const newNotebookId = nanoid()
    const prevNotebooks = notebooksData?.Notebooks?.[userId]
    const newNoteBook = {name, description, "id": newNotebookId}
    prevNotebooks.push(newNoteBook)
    delete notebooksData?.Notebooks?.[userId]
    const payload = { Notebooks: { [userId]: prevNotebooks, ...notebooksData?.Notebooks } };
    updateDoc(notebooksRef, payload)

    const prevNotes = notesData?.Notes?.[userId]
    const allNotes = notesData?.Notes
    delete notesData?.Notes?.[userId]
    const notesPayload = {
      Notes: {
        [userId]: {
          [newNotebookId]: [],  ...prevNotes
        },
        ...allNotes
      }
    };
    updateDoc(notesRef, notesPayload)
    closeModal();
  };


  return (
    <>
      <div className={styles.createnotebook_container} >
      <Error error={error} />

      <div className={styles.createnotebook_wrap}>
        <form className={styles.createnotebook_form} onSubmit={onSubmit} >
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

        <button type="submit" > Create </button>
      </form>
      </div>
      </div>
    </>
  )
};



export default CreateNotebookForm;
