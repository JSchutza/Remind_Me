// imports here:
import { useState } from 'react';


// component definitions here:
function LoginForm () {
    // state for the form here:
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmation, setConfirmation ] = useState('');



    return (
        <>
            <h1> Login </h1>
            <form>
                <div>
                    <label id="email" /> Email
                        <br />
                        <input type="email" />
                </div>

                <div>
                    <label id="password" /> Password
                        <br />
                        <input type="password" />
                </div>

                <div>
                    <label id="confirmation" /> Confirmation
                        <br />
                        <input type="password" />
                </div>

            </form>

        </>
    );
}





// exports here:
export default LoginForm;
