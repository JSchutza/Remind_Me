// imports here:
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';



// component definitions here:
function LoginForm () {
    // state for the form here:
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmation, setConfirmation ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const [ reminder, setReminder ] = useState('');

    // for making the ErrorMessage component
    useEffect(() => {
        // make the errors array for ErrorMessage component
        let errors_array = [];

        if(!username.includes('@') || !username.includes('.')) {
            errors_array.push('Invalid email.');
        }

        if(password.length <= 6) {
            errors_array.push('Must have a password that is longer than six characters.');
        }

        if(password !== confirmation) {
            errors_array.push('Your password does not match the confirmation box.');
        }

        setErrors([...errors_array]);
    }, [username, password, confirmation]);


    const onSubmit = e => {
    e.preventDefault();
        // dispatch the thunk for the login api route only if allErrors. length is 0
        if(errors.length === 0){
            // dispatch the thunk
        } else {
            // set reminder state here
            setReminder('Please check the above validation errors.');
        }

    // history.push('/');
    };



    return (
        <>
            <h1> Login </h1>
                <ErrorMessage errors={errors}  />

            <div className="reminder-login">
                <p>{reminder}</p>
            </div>

            <form className="login-form" onSubmit={onSubmit} >
                <div>
                    <label htmlFor="email"  /> Username
                        <br />
                    <input
                        type="text"
                        onChange={(event) => setUsername(event.target.value) }
                        value={username}
                        placeholder="Your Username Here"
                        id="username"
                        name="username"
                    />
                </div>
                <div>
                    <label htmlFor="password" /> Password
                        <br />
                    <input
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        placeholder="Password Here"
                        id="password"
                        name="password"
                    />
                </div>
                <div>
                    <label htmlFor="confirmation" /> Confirmation
                        <br />
                    <input
                        type="password"
                        onChange={(event) => setConfirmation(event.target.value)}
                        value={confirmation}
                        placeholder="Confirmation Here"
                        id="confirmation"
                        name="confirmation"
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
}





// exports here:
export default LoginForm;
