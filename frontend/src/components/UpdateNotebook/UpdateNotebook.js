import { useState } from 'react';

import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';


import UpdateNotebookForm from "../UpdateNotebookForm";





const UpdateNotebook = ({ notebookId }) => {
  const [ showModal, setShowModal ] = useState(false);


  const handleUpdate = event => {
    event.preventDefault();
    setShowModal(true);
  }


  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <>
      <Link to={'/'} onClick={event => handleUpdate(event)} > Update </Link>


      <ReactModal isOpen={showModal} onRequestClose={closeModal} >
        <UpdateNotebookForm />
      </ReactModal>
    </>
  )

};




export default UpdateNotebook;
