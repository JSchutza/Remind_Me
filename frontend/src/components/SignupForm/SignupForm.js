import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Error from "../Error";
import { styles }  from '../SignupForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useIonAlert} from "@ionic/react";
import {doc, updateDoc} from "firebase/firestore";
import {useFirestore, useFirestoreDocData} from "reactfire";




function SignupForm (){
    //state here
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ error, setError ] = useState([]);
    const dispatch = useDispatch();
    const errors = useSelector(store => store.errorReducer.errors);
    const history = useHistory();
    const auth = getAuth();
    const [alert] = useIonAlert();

    // get the firestore document reference
    const notebooksRef = doc(useFirestore(), "Notebooks", "mOLtamIAoHyjhdrvBjhv")
    // subscribe to the document for realtime updates.
    const { status: notebooksStatus, data: notebooksData } = useFirestoreDocData(notebooksRef)
    // get the firestore document reference
    const notesRef = doc(useFirestore(), "Notes", "WeJNP1GkfLig2GQdQ4ED")
    // subscribe to the document for realtime updates.
    const { status: notesStatus, data: notesData } = useFirestoreDocData(notesRef)
    // get the firestore document reference
    const recentNotebooksRef = doc(useFirestore(), "RecentNotebooks", "YGVQzCptmxyuSArcCQjZ")
    // subscribe to the document for realtime updates.
    const { status: recentNotebooksStatus, data: recentNotebooksData } = useFirestoreDocData(recentNotebooksRef)
    // get the firestore document reference
    const tagsRef = doc(useFirestore(), "Tags", "yivoozFOiFlzZFwsvq58")
    // subscribe to the document for realtime updates.
    const { status: tagsStatus, data: tagsData } = useFirestoreDocData(tagsRef)
    // get the firestore document reference
    const usersRef = doc(useFirestore(), "Users", "Ufzp8rQgqOt0YXtcDayL")
    // subscribe to the document for realtime updates.
    const { status: usersStatus, data: usersData } = useFirestoreDocData(usersRef)


    useEffect(() => {
        if (errors !== null) {
            setError(errors);
        }
    }, [errors]);



    const onSubmit = async e => {
        e.preventDefault();
        // create authed account for firebase authentication
        const signupResult = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                return true;
            })
            .catch(async (error) => {
                const errorMessage = error.message;

                await alert({
                    header: "Error Creating Account",
                    message: errorMessage,
                    buttons: ["OK"],
                });
                return false;
            });


        if (signupResult) {
            const userId = auth.currentUser?.uid
            const newNotebooks = {Notebooks: { [userId]: [], ...notebooksData?.Notebooks }}
            updateDoc(notebooksRef, newNotebooks)

            const newNotes = {Notes:{ [userId]: {}, ...notesData?.Notes }}
            updateDoc(notesRef, newNotes)

            const newRecentNotebooks = {RecentNotebooks:{ [userId]: [], ...recentNotebooksData?.RecentNotebooks }}
            updateDoc(recentNotebooksRef, newRecentNotebooks)

            const newTags = {Tags:{ [userId]: [], ...tagsData?.Tags }}
            updateDoc(tagsRef, newTags)

            const newUsers = {Users:{
                    [userId]: { "avatar": null, "email": email, "username": username },
                    ...usersData?.Users
                }}
            updateDoc(usersRef, newUsers)

            history.push('/profile');
        }


        // const success = await dispatch(thunk_signupUser({ username, email, password }));
    };


    return (
        <>
            <div className={styles.signup_wrap}>
                <Error error={error} />

                <div className={styles.main_div}>
                    <form onSubmit={onSubmit}>
                        <h1>Signup</h1>
                        <div className={styles.text_box} >
                            <label className={styles.each_label} htmlFor="username" /> Username
                            <br/>
                            <input
                                type="text"
                                onChange={(event) => setUsername(event.target.value)}
                                value={username}
                                placeholder="Your Username Here"
                                id="username"
                                name="username"
                                aria-label='Username'
                            />
                        </div>

                        <div className={styles.text_box} >
                            <label className={styles.each_label} htmlFor="email"  /> Email
                            <br />
                            <input
                                type='text'
                                onChange={(e) => setEmail(e.target.value) }
                                value={email}
                                placeholder="Your Email Here"
                                name='email'
                                id='email'
                                aria-label='Email'
                            />
                        </div>

                        <div className={styles.text_box} >
                            <label className={styles.each_label} htmlFor="" /> Password
                            <br/>
                            <input
                                type='text'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Your Password Here"
                                name='password'
                                id='password'
                                aria-label='Password'
                            />
                        </div>

                        <div className={styles.text_box} >
                            <label className={styles.each_label} htmlFor="" /> Confirmation
                            <br/>
                            <input
                                type='text'
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                placeholder="Confirmation Here"
                                name='confirmation'
                                id='confirmation'
                                aria-label='Password Confirmation'
                            />
                        </div>

                        <button>Signup</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupForm;
