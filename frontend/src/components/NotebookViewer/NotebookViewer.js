
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
import CodeEditor from '../Editor';



import styles from './notebookviewer.module.css';



const NotebookViewer = () => {
  const [ onrefresh, setOnRefresh ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);


  const { notebookId } = useParams();
  const notebook = useSelector(store => store.notebooksReducer.notebooks);
  const re_notebook = useSelector(store => store.notebookPageReducer?.notebook);
  const allNotes = useSelector(store => store.notesReducer.notes);
  const dispatch = useDispatch();



  useEffect(() => {
    if(notebook?.[notebookId] === undefined) {
      dispatch(thunk_notebookForPage(notebookId));
      setOnRefresh(true);
    }

    dispatch(thunk_getSpecificNote(notebookId));
  },[]);




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
        {/* if the user refresh page */}

        {onrefresh && re_notebook !== null ? (
          <h3 className={styles.notebook_name}>{re_notebook.name}</h3>
        ) : (
          <h3 className={styles.notebook_name}>
            {notebook?.[notebookId].name}
          </h3>
        )}

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

      {allNotes !== null ? (
        Object.values(allNotes).map((eachNote) => (
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
