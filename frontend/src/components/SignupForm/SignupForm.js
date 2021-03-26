import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';


function SignupForm (){
    //state here
    const [ username, setUsername ] = useState("");
    // more

    const [ errors, setErrors ] = useState([]);


    useEffect(() => {
    const errors = [];
    if (true) {
    errors.push('message here');
    }
    if (true) {
    errors.push('message here');
    } else if (true) {
    errors.push('message here');
    }
    setErrors(errors);
    },
    [username]);

    const onSubmit = e => {
    e.preventDefault();
    // history.push('/');
    };

    return (
        <>
        <h1>Signup</h1>
        <ErrorMessage errors={errors}/>

        <div className="reminder-signup">
            <p>{}</p>
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

            </div>

            <div>
                <button>Signup</button>
            </div>
        </form>
        </>
    );
}

export default SignupForm;
