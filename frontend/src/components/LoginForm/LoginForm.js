// imports here:
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_login } from '../../thunks/session.js';
import React from 'react';
import Error from "../Error";


// css here
import { styles } from '../LoginForm';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useIonAlert} from "@ionic/react";



// component definitions here:
function LoginForm() {
    const auth = getAuth();
    const [alert] = useIonAlert();
    // state for the form here:
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmation, setConfirmation ] = useState('');
    const [ error, setError ] = useState([]);
    const dispatch = useDispatch();
    const errors = useSelector(store => store.errorReducer.errors);
    const history = useHistory();



    useEffect(() => {
        if (errors !== null){
            setError(errors);
        }
    }, [errors]);



    const onSubmit = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, username, password).then(() => {
            // history.push('/profile');
            return true;
        }).catch(async error => {
            await alert({
                header: "Error Signing In",
                message: error.message,
                buttons: ["OK"],
            });
            return false;
        });

        // const success = await dispatch(thunk_login({ credential: username, password }));
    };



    return (
        <>
            <div className={styles.login_wrap}>
                    <Error error={error} />

                <div className={styles.main_div}>
                <h1> Login </h1>
                <form onSubmit={onSubmit} >
                    <div className={styles.text_box} >
                        <label className={styles.each_label} htmlFor="email"  /> Email
                            <br />
                        <input
                            type="text"
                            onChange={(event) => setUsername(event.target.value) }
                            value={username}
                            placeholder="Your Email Here"
                            id="username"
                            name="username"
                            autoComplete={'email'}
                            aria-label='Email'
                        />
                    </div>

                    <div className={styles.text_box} >
                        <label className={styles.each_label} htmlFor="password" /> Password
                            <br />
                        <input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            placeholder="Password Here"
                            id="password"
                            name="password"
                            autoComplete={'new-password'}
                            aria-label='Password'
                        />
                    </div>

                    <div className={styles.text_box} >
                        <label className={styles.each_label} htmlFor="confirmation" /> Confirmation
                            <br />
                        <input
                            type="password"
                            onChange={(event) => setConfirmation(event.target.value)}
                            value={confirmation}
                            placeholder="Confirmation Here"
                            id="confirmation"
                            name="confirmation"
                            autoComplete={'new-password'}
                            aria-label='Confirm Password'
                        />
                    </div>

                    <button>Login</button>

                </form>
                </div>
            </div>
        </>
    );
}





// exports here:
export default LoginForm;
