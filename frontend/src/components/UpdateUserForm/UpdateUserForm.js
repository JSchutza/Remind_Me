import { useState } from 'react';


import styles from "./updateuserform.module.css";



const UpdateUserForm = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ avatar, setAvatar ] = useState('');


  const onSubmit = event => {
    event.preventDefault();
  }


  return (
    <>
    <div className={styles.updateuser_wrap}>
    <form className={styles.updateuser_form} onSubmit={onSubmit}>

      <label>
        Username
        <input
          type='text'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <label>
        Email
        <input
          type='text'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>

      <label>
        Avatar
        <input
          type='text'
          value={avatar}
          onChange={event => setAvatar(event.target.value)}
        />
      </label>


      <button type='submit'> Update </button>
    </form>
    </div>
    </>
  )
};

export default UpdateUserForm;
