import React from 'react';
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearError } from '../../actions/error.js';
import { nanoid } from 'nanoid';
import CreateNotebookForm from "../CreateNotebookForm";
import DeleteNotebook from "../DeleteNotebook";
import UpdateNotebookForm from "../UpdateNotebookForm";
import ReactModal from 'react-modal';
import styles from "./notebookspage.module.css";
import {doc, updateDoc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData} from "reactfire";
import {getAuth} from "firebase/auth";




const NotebooksPage = () => {
  // get the firestore document reference
  const notebooksRef = doc(useFirestore(), "Notebooks", "mOLtamIAoHyjhdrvBjhv")
  // subscribe to the document for realtime updates.
  const { status: notebooksStatus, data: notebooksData } = useFirestoreDocData(notebooksRef)

  const [ showCreateModal, setShowCreateModal ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ notebookId, setNotebookId ] = useState(null);
  const [ prevnotebook, setPrevnotebook ] = useState(null);
  const dispatch = useDispatch();
  const app = useFirebaseApp()
  const auth = getAuth(app)



  const handleCreate = event => {
    event.preventDefault();
    dispatch(clearError());
    setShowCreateModal(true);
  };


  const closeCreateModal = () => {
    setShowCreateModal(false);
  };



  const handleDelete = (event, id) => {
    event.preventDefault();
    const uid = auth.currentUser?.uid
    const allNotebooks = notebooksData?.Notebooks?.[uid]
    const result = allNotebooks.filter((each) => each?.id !== id)
    delete notebooksData?.Notebooks?.[uid]
    const payload = { Notebooks: { [uid]: result,  ...notebooksData?.Notebooks } };
    updateDoc(notebooksRef, payload)
    // dispatch(thunk_deleteNotebook(id));
  };



  const handleUpdate = (event, id) => {
    event.preventDefault();
    const uid = auth.currentUser?.uid
    const allNotebooks = notebooksData?.Notebooks?.[uid]
    const prevNotebook = allNotebooks.filter((eachNotebook) => eachNotebook.id === id)
    setNotebookId(id);
    setPrevnotebook(prevNotebook[0]);
    setShowModal(true);
  };



  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <>
      <div className={styles.notebooks_wrap}>
        <h1>Notebooks</h1>

        <div
          className={styles.notebooks_create_button}
          onClick={(event) => handleCreate(event)}
        >
          <Link
            className={styles.create_notebook_link}
            to={'/'}
            onClick={(event) => handleCreate(event)}
          >
            Create
          </Link>
        </div>

        <ReactModal
          isOpen={showCreateModal}
          onRequestClose={closeCreateModal}
          appElement={document.getElementById('root')}
        >
          <CreateNotebookForm closeModal={closeCreateModal} />
        </ReactModal>


        <ReactModal
          isOpen={showModal}
          onRequestClose={closeModal}
          appElement={document.getElementById('root')}
        >
          <UpdateNotebookForm
            notebookId={notebookId}
            notebook={prevnotebook}
            closeModal={closeModal}
          />
        </ReactModal>



        <div className={styles.eachnotebook_container}>
          {notebooksData?.Notebooks?.[auth.currentUser?.uid]?.length > 0 ? (
            <>
              {notebooksData?.Notebooks?.[auth.currentUser?.uid]?.map((eachNotebook) => (
                <div key={nanoid()} className={styles.eachnotebook_wrap}>
                  <div>
                    <Link to={`/notebook/${eachNotebook?.id}/${eachNotebook?.name}`}>
                      <h3>{eachNotebook?.name}</h3>
                    </Link>
                  </div>

                  <div className={styles.eachnotebook_buttons_wrap}>
                    <div
                      className={styles.eachnotebook_delete_button}
                      onClick={(event) => handleDelete(event, eachNotebook?.id)}
                    >
                      <DeleteNotebook notebookId={eachNotebook?.id} />
                    </div>

                    <div
                      className={styles.eachnotebook_update_button}
                      onClick={(event) => handleUpdate(event, eachNotebook?.id)}
                    >
                      <Link to='/' onClick={(event) => handleUpdate(event, eachNotebook?.id)} > Update </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h2>You currently do not have any notebooks!</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NotebooksPage;
