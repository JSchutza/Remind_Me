import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { Link } from 'react-router-dom';

import { thunk_getLimitedNotebooks } from '../../thunks/notebooks.js';

import no_user from "./no_user.svg";

import ReactModal from 'react-modal';


import UpdateUserForm from '../UpdateUserForm';




const Profile = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const [ open_close, setOpen_Close ] = useState(false);

  const notebooks = useSelector(store => store.notebooksReducer.notebooks);
// create an input and state so that users can enter a number of notebooks they want to list


  useEffect(() => {
    dispatch(thunk_getLimitedNotebooks(3, isUser.id))
  },[]);


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
          {isUser.avatar === null ?
            <img src={no_user} />
          :
            <img src={isUser.avatar} />
          }
        </div>

        <div>
          <h1>{isUser.username}</h1>
          <h2>{isUser.email}</h2>
        </div>

        <div>
          {isUser.id === 1 && isUser.email === 'demo@gmail.com' ?
            <></>
            :
              <Link to={'/'} onClick={event => showUpdateForm(event)} >Update</Link>
           }
        </div>
      </div>


      <ReactModal isOpen={open_close} onRequestClose={closeModal} >
        <UpdateUserForm />
      </ReactModal>

      <div>
        <h3>Recent Notebooks</h3>
        <div>
          {notebooks ?
            <>
            {Object.values(notebooks).map(eachBook => (
              <>
                <Link to={`/notebook/${eachBook.id}`} > <h4>{eachBook.name}</h4> </Link>
              </>
            ))}
            </>
          :
            <></>
          }
        </div>
      </div>


    </>
  )
};

export default Profile;
