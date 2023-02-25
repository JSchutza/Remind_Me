import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Error from "../Error";
import { styles }  from '../SignupForm';





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


    useEffect(() => {
        if (errors !== null) {
            setError(errors);
        }
    }, [errors]);



    const onSubmit = async e => {
        e.preventDefault();
        // const success = await dispatch(thunk_signupUser({ username, email, password }));
        // if(success) {
        //     history.push('/profile');
        // }
        //todo after successful sign up need to add all of the new users collections to firestore db.

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
