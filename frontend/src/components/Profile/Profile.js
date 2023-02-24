import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { thunk_getLimitedNotebooks } from '../../thunks/notebooks.js';

import no_user from "./no_user.svg";

import ReactModal from 'react-modal';

import { nanoid } from 'nanoid';
import UpdateUserForm from '../UpdateUserForm';



import styles from "./profile.module.css";




const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ open_close, setOpen_Close ] = useState(false);

  const notebooks = useSelector(store => store.notebooksReducer.notebooks);
// create an input and state so that users can enter a number of notebooks they want to list


  useEffect(() => {
    // dispatch(thunk_getLimitedNotebooks(3, isUser.id))
  },[dispatch]);


  const showUpdateForm = event => {
    event.preventDefault();
    setOpen_Close(true);
  }

  const closeModal = () => {
    setOpen_Close(false);
  }




  return (
    <>
      <div className={styles.userinfo_wrap}>
        <div className={styles.user_img} >
          {/*{isUser.avatar === null ?*/}
          {/*  <img src={no_user} />*/}
          {/*:*/}
          {/*  <img src={isUser.avatar} />*/}
          {/*}*/}
        </div>

        <div>
          {/*<h1>{isUser.username}</h1>*/}
          {/*<h2>{isUser.email}</h2>*/}
        </div>

        <div>
          {/*{isUser.id === 1 && isUser.email === 'demo@gmail.com' ? null*/}
          {/*  :*/}
              <Link to={'/'} onClick={event => showUpdateForm(event)} >Update</Link>
           {/*}*/}
        </div>
      </div>


      <ReactModal
        isOpen={open_close}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
      >
        <UpdateUserForm closeModal={closeModal} />
      </ReactModal>

      <div className={styles.recentnotebooks_wrap}>
        <h3>Recent Notebooks</h3>

        <div className={styles.each_recent_notebook} >
          {notebooks ?
            Object.values(notebooks).map(eachBook => (
              <div
                key={nanoid()}
                className={styles.each_notebook_link}
                onClick={() => history.push(`/notebook/${eachBook.id}`)}
              >
                <Link to={`/notebook/${eachBook.id}`} className={styles.link} > <h4>{eachBook.name}</h4> </Link>
              </div>
            ))
          : null
          }
        </div>
      </div>
    </>
  )
};

export default Profile;
