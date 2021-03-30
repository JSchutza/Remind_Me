import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';
import { useDispatch } from 'react-redux';
import { thunk_signupUser, thunk_checkIfThereIsAUser } from '../../thunks/session.js';
import { useHistory } from 'react-router-dom';
import Div from '../Div';

import { styles }  from '../SignupForm';





function SignupForm (){
    //state here
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const [ reminder, setReminder ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
    const errors = [];
    if (username.includes('@') || username.includes('.')) {
        errors.push("You can not have an email for a username, sorry!");
    }
    if(username.length <= 3 || username.length >= 30) {
        errors.push("Your username must be between 3 to 30 characters long.");
    }
    if(username.length === 0) {
        errors.push("You must input an username to signup.")
    }
    if(!email.includes("@") || !email.includes(".")) {
        errors.push('Please enter a valid email address.')
    }
    if(email.length <= 3 || email.length >= 256) {
        errors.push("Your email must be between 3 to 256 characters long.");
    }
    if(password.length === 0) {
        errors.push("Please enter a password.");
    }
    if (password !== confirmPassword) {
        errors.push("Your password must match the confirmation.");
    }
    setErrors(errors);
    }, [username, email, password, confirmPassword]);


    const onSubmit = e => {
    e.preventDefault();
    // if errors.length is 0 dispatch the the signup thunk
    if (errors.length === 0) {
        dispatch(thunk_signupUser({ username, email, password }));

        setTimeout(() => {
            history.push('/profile');
            dispatch(thunk_checkIfThereIsAUser());
        }, 1000);
    } else {
        setReminder('Please check the above validation errors.');
    }

    };

    return (
        <>
        <ErrorMessage errors={errors}/>

        <div className="reminder-signup">
                <p>{reminder}</p>
        </div>
        <Div selectors={[styles.main_div]}>
        <form onSubmit={onSubmit}>
        <h1>Signup</h1>
            <Div selectors={[styles.text_box]} >
                <label className={styles.each_label} htmlFor="username" /> Username
                <br/>
                <input
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    placeholder="Your Username Here"
                    id="username"
                    name="username"
                />
            </Div>

            <Div selectors={[styles.text_box]} >
                <label className={styles.each_label} htmlFor="email"  /> Email
                <br />
                <input
                    type='text'
                    onChange={(e) => setEmail(e.target.value) }
                    value={email}
                    placeholder="Your Email Here"
                    name='email'
                    id='email'
                />
            </Div>

            <Div selectors={[styles.text_box]} >
                    <label className={styles.each_label} htmlFor="" /> Password
                    <br/>
                    <input
                        type='text'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Your Password Here"
                        name='password'
                        id='password'
                    />
            </Div>

            <Div selectors={[styles.text_box]} >
                    <label className={styles.each_label} htmlFor="" /> Confirmation
                    <br/>
                    <input
                        type='text'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        placeholder="Confirmation Here"
                        name='confirmation'
                        id='confirmation'
                    />
            </Div>


                <button>Signup</button>

        </form>
        </Div>
        </>
    );
}

export default SignupForm;
