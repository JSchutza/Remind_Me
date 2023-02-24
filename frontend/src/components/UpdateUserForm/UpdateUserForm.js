import { useState } from 'react';
import React from 'react';

import styles from "./updateuserform.module.css";



const UpdateUserForm = ({ closeModal }) => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ avatar, setAvatar ] = useState('');


  const onSubmit = event => {
    event.preventDefault();
    closeModal();
  }


  return (
    <>
    <div className={styles.updateuser_wrap}>
      <p> This feature is in development. ⚒ </p>
    <form className={styles.updateuser_form} onSubmit={onSubmit}>

      <label>
        Username
        <input
          type='text'
          value={username}
          onChange={event => setUsername(event.target.value)}
          aria-label='Username'
        />
      </label>

      <label>
        Email
        <input
          type='text'
          value={email}
          onChange={event => setEmail(event.target.value)}
          aria-label='Email'
        />
      </label>

      <label>
        Avatar
        <input
          type='text'
          value={avatar}
          onChange={event => setAvatar(event.target.value)}
          aria-label='Avatar'
        />
      </label>


      <button type='submit'> Update </button>
    </form>
    </div>
    </>
  )
};

export default UpdateUserForm;
