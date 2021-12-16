

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearError } from '../../actions/error.js';

import { thunk_getNoteBooks } from "../../thunks/notebooks.js";
import { useUser } from "../../context/UserContext.js";
import { nanoid } from 'nanoid';

import CreateNotebookForm from "../CreateNotebookForm";
import DeleteNotebook from "../DeleteNotebook";
import UpdateNotebook from "../UpdateNotebook";


import ReactModal from 'react-modal';


import styles from "./notebookspage.module.css";


const NotebooksPage = () => {
  const [ showModal, setShowModal ] = useState(false);
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
    setShowModal(true);
  }


  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <>
      <div className={styles.notebooks_wrap}>
        <h1>Notebooks</h1>

        <div
          className={styles.notebooks_create_button}
          onClick={(event) => handleCreate(event)}
        >
          <Link to={'/'} onClick={(event) => handleCreate(event)}>
            Create
          </Link>
        </div>


        <ReactModal
          isOpen={showModal}
          onRequestClose={closeModal}
          appElement={document.getElementById('root')}
        >
          <CreateNotebookForm closeModal={closeModal} />
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
                    <div>
                      <DeleteNotebook notebookId={eachNotebook.id} />
                    </div>

                    <div>
                      <UpdateNotebook notebookId={eachNotebook.id} />
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
