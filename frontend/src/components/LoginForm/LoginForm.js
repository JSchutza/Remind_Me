// imports here:
import { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage.js';



// component definitions here:
function LoginForm () {
    // state for the form here:
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmation, setConfirmation ] = useState('');
    const [ allErrors, setAllErrors ] = useState([]);


    // for making the ErrorMessage component
    useEffect(() => {
        // make the errors array for ErrorMessage component
        let errors_array = [];

        if(!email.includes('@') || !email.includes('.')) {
            errors_array.push('Invalid email.');
        }

        if(password.length <= 6) {
            errors_array.push('Must have a password that is longer than six characters.');
        }

        if(password !== confirmation) {
            errors_array.push('Your password does not match the confirmation box.');
        }

        setAllErrors([...errors_array]);
    }, [email, password, confirmation]);




    return (
        <>
            <h1> Login </h1>
                <ErrorMessage errors={allErrors}  />

            <form>


                <div>
                    <label htmlFor="email"  /> Email
                        <br />
                    <input
                        type="email"
                        onChange={(event) => setEmail(event.target.value) }
                        value={email}
                        placeholder="email@email.com"
                        id="email"
                        name="email"
                    />

                </div>


                <div>
                    <label htmlFor="password" /> Password
                        <br />
                    <input
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        placeholder="password here"
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
                        placeholder="confirmation here"
                        id="confirmation"
                        name="confirmation"
                    />

                </div>


            </form>

        </>
    );
}





// exports here:
export default LoginForm;
