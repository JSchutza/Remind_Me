import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { clearError } from "../../actions/error.js";
import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import { thunk_getSpecificNote } from "../../thunks/notes.js";
import { nanoid } from 'nanoid';
import DropDownArrow from "../DropDownArrow";
import ReactModal from 'react-modal';
import { CodeEditor } from '../Editor';
import styles from './notebookviewer.module.css';
import {doc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData} from "reactfire";
import {getAuth} from "firebase/auth";




const NotebookViewer = () => {
  // get the firestore document reference
  const notesRef = doc(useFirestore(), "Notes", "WeJNP1GkfLig2GQdQ4ED")
  // subscribe to the document for realtime updates.
  const { status: notesStatus, data: notesData } = useFirestoreDocData(notesRef)
  const app = useFirebaseApp()
  const auth = getAuth(app)

  const [ showModal, setShowModal ] = useState(false);
  const { notebookId, name } = useParams();
  const dispatch = useDispatch()



  const handleCreate = event => {
    event.preventDefault();
    dispatch(clearError());
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <>
      <div className={styles.notebookviewer_wrap}>
        <h1>Notebook</h1>

        <h3 className={styles.notebook_name}>{name}</h3>

        <h1>Notes</h1>

        <div className={styles.create_note_wrap} onClick={(event) => handleCreate(event)} >
          <Link to={'/'} onClick={(event) => handleCreate(event)}>
            Create
          </Link>
        </div>
      </div>

      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
      >
        <CodeEditor notebook_id={notebookId} closeModal={closeModal} />
      </ReactModal>


      {notesData?.Notes?.[auth.currentUser?.uid]?.length > 0 ? (
        notesData?.Notes?.[auth.currentUser?.uid]?.map((eachNote) => (
          <DropDownArrow
            eachNote={eachNote}
            notebookId={notebookId}
            key={nanoid()}
          />
        ))
      ) : (
        <h3 className={styles.no_note_message}>
          There are no notes for this Notebook
        </h3>
      )}
    </>
  );
};



export default NotebookViewer;
