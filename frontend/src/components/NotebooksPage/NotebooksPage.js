

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearError } from '../../actions/error.js';

import { thunk_getNoteBooks } from "../../thunks/notebooks.js";
import { thunk_deleteNotebook } from '../../thunks/notebooks.js';
import { useUser } from "../../context/UserContext.js";
import { nanoid } from 'nanoid';

import CreateNotebookForm from "../CreateNotebookForm";
import DeleteNotebook from "../DeleteNotebook";
import UpdateNotebookForm from "../UpdateNotebookForm";

import ReactModal from 'react-modal';

import styles from "./notebookspage.module.css";


const NotebooksPage = () => {
  const [ showCreateModal, setShowCreateModal ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ notebookId, setNotebookId ] = useState(null);
  const [ prevnotebook, setPrevnotebook ] = useState(null);
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const notebooks = useSelector(store => store.notebooksReducer.notebooks);



  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  },[]);


// need to check the length of notebooks ... but it is an empty object if there are no notebooks
// also cant convert null to an array AKA notebooks at some time so need to think of a way to fix this
  // check notebooks in the backend and send the length?



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
    // await dispatch?
    dispatch(thunk_deleteNotebook(id));
  };



  const handleUpdate = (event, id) => {
    event.preventDefault();
    setNotebookId(id);
    setPrevnotebook(notebooks[id]);
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
          {notebooks !== null ? (
            <>
              {Object.values(notebooks).map((eachNotebook) => (
                <div key={nanoid()} className={styles.eachnotebook_wrap}>
                  <div>
                    <Link to={`/notebook/${eachNotebook.id}`}>
                      <h3>{eachNotebook.name}</h3>
                    </Link>
                  </div>

                  <div className={styles.eachnotebook_buttons_wrap}>
                    <div
                      className={styles.eachnotebook_delete_button}
                      onClick={(event) => handleDelete(event, eachNotebook.id)}
                    >
                      <DeleteNotebook notebookId={eachNotebook.id} />
                    </div>

                    <div
                      className={styles.eachnotebook_update_button}
                      onClick={(event) => handleUpdate(event, eachNotebook.id)}
                    >
                      <Link to='/' onClick={(event) => handleUpdate(event, eachNotebook.id)} > Update </Link>
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
