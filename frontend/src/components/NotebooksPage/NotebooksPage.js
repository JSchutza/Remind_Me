

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



import { thunk_getNoteBooks } from "../../thunks/notebooks.js";
import { useUser } from "../../context/UserContext.js";

import CreateNotebookForm from "../CreateNotebookForm";
import DeleteNotebook from "../DeleteNotebook";
import UpdateNotebook from "../UpdateNotebook";


import ReactModal from 'react-modal';




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
    setShowModal(true);
  }


  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <>
      <h1>Notebooks</h1>
      <Link to={'/'} onClick={event => handleCreate(event)}> Create </Link>


      <ReactModal isOpen={showModal} onRequestClose={closeModal} >
        <CreateNotebookForm  />
      </ReactModal>


      <div>
        {notebooks !== null ?
          <>
            {Object.values(notebooks).map(eachNotebook => (
              <>
                <Link to={`/notebook/${eachNotebook.id}`} >
                  <h3>{eachNotebook.name}</h3>
                </Link>
                {/* update and delete notebook components here */}
                <DeleteNotebook notebookId={eachNotebook.id} />
                <UpdateNotebook notebookId={eachNotebook.id} />
              </>
            ))}
          </>
        :
          <>
            <h2>You currently do not have any notebooks!</h2>
          </>
        }
    </div>
      </>
  )
};

export default NotebooksPage;
