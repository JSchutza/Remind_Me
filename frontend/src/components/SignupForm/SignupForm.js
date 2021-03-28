import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';
import { useDispatch } from 'react-redux';
import { thunk_signupUser, thunk_checkIfThereIsAUser } from '../../thunks/session.js';
import { useHistory } from 'react-router-dom';








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
        <h1>Signup</h1>
        <ErrorMessage errors={errors}/>

        <div className="reminder-signup">
                <p>{reminder}</p>
        </div>

        <form className='signup-form' onSubmit={onSubmit}>
            <div>
                <label htmlFor="username" /> Username
                <br/>
                <input
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    id="username"
                    name="username"
                />
            </div>

            <div>
                <label htmlFor="email"  /> Email
                <br />
                <input
                    type='text'
                    onChange={(e) => setEmail(e.target.value) }
                    value={email}
                    name='email'
                    id='email'
                />
            </div>

            <div>
                    <label htmlFor="" /> Password
                    <br/>
                    <input
                        type='text'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name='password'
                        id='password'
                    />
            </div>

            <div>
                    <label htmlFor="" /> Confirmation
                    <br/>
                    <input
                        type='text'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name='confirmation'
                        id='confirmation'
                    />
            </div>

            <div>
                <button>Signup</button>
            </div>
        </form>
        </>
    );
}

export default SignupForm;
