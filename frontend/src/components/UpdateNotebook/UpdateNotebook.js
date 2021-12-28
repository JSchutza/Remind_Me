import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';


import UpdateNotebookForm from "../UpdateNotebookForm";
import { clearError } from "../../actions/error.js";
import { useModal } from '../../context/ModalContext.js';




const UpdateNotebook = ({ notebookId }) => {
  const { showModal, setShowModal } = useModal();
  const dispatch = useDispatch();

  const handleUpdate = event => {
    event.preventDefault();
    dispatch(clearError());
    setShowModal(true);
  }


  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <>
      <Link to='/' onClick={event => handleUpdate(event)} > Update </Link>


      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
      >
        <UpdateNotebookForm notebookId={notebookId} closeModal={closeModal} />
      </ReactModal>
    </>
  )

};




export default UpdateNotebook;
