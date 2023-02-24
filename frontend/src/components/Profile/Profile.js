import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { thunk_getLimitedNotebooks } from '../../thunks/notebooks.js';
import no_user from "./no_user.svg";
import ReactModal from 'react-modal';
import { nanoid } from 'nanoid';
import UpdateUserForm from '../UpdateUserForm';
import {doc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData,} from "reactfire";
import {getAuth} from "firebase/auth";
import styles from "./profile.module.css";




const Profile = () => {
    // get the firestore document reference
    const usersRef = doc(useFirestore(), "Users", "Ufzp8rQgqOt0YXtcDayL")
    // subscribe to the document for realtime updates.
    const { status: usersStatus, data: usersData } = useFirestoreDocData(usersRef)

    const dispatch = useDispatch();
    const history = useHistory();
    const [ open_close, setOpen_Close ] = useState(false);
    const notebooks = useSelector(store => store.notebooksReducer.notebooks);
// create an input and state so that users can enter a number of notebooks they want to list
    const app = useFirebaseApp()
    const auth = getAuth(app)


    useEffect(() => {
        // dispatch(thunk_getLimitedNotebooks(3, isUser.id))
        console.log()
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
                    {usersData?.Users?.[auth.currentUser?.uid]?.avatar === undefined ?
                          <img src={no_user} />
                        :
                          <img src={usersData?.Users?.[auth.currentUser?.uid]?.avatar} />
                    }
                </div>

                <div>
                    <h1>{usersData?.Users?.[auth.currentUser?.uid]?.username}</h1>
                    <h2>{usersData?.Users?.[auth.currentUser?.uid]?.email}</h2>
                </div>

                <div>
                    {auth.currentUser?.uid === "PcMq5K9WcrVhLFGL0o7bUgIQpxG2" &&
                        usersData?.Users?.[auth.currentUser?.uid]?.email === 'demo@gmail.com' ? null
                      :
                    <Link to={'/'} onClick={event => showUpdateForm(event)} >Update</Link>
                    }
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
