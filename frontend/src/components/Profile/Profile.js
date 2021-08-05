import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';


import UpdateUserForm from '../UpdateUserForm';


const Profile = () => {
  const { isUser } = useUser();
  const [ open_close, setOpen_Close ] = useState(false);


  const showUpdateForm = event => {
    event.preventDefault();
    setOpen_Close(true);
  }

  const closeModal = () => {
    setOpen_Close(false);
  }


  return (
    <>
      <div>

        <div>
          <img src={isUser.avatar} />
        </div>

        <div>
          <h1>{isUser.username}</h1>
          <h2>{isUser.email}</h2>
        </div>

        <div>
          <Link to={'/'} onClick={event => showUpdateForm(event)} >Update</Link>
        </div>

      </div>

      <ReactModal isOpen={open_close} onRequestClose={closeModal} >
        <UpdateUserForm />
      </ReactModal>
    </>
  )
};

export default Profile;
