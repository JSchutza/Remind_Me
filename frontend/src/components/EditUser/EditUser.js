import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import ErrorMessage from '../ErrorMessage';
import Div from '../Div';



const EditUser = ({ current_info }) => {
    //state here
    const [ show, setShow ] = useState(false);

    const [ username, setUsername ] = useState(current_info.username);
    const [ email, setEmail ] = useState(current_info.email);
    const [ reminder, setReminder ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const history = useHistory();





    useEffect(() => {
    const errors = [];
    if (username.includes('@') || username.includes('.')) {
        errors.push("You can not have an email for a username, sorry!");
    }
    if (username.length <= 3 || username.length >= 30) {
        errors.push("Your username must be between 3 to 30 characters long.");
    }
    if (username.length === 0) {
        errors.push("You must input an username to signup.")
    }
    if (!email.includes("@") || !email.includes(".")) {
        errors.push('Please enter a valid email address.')
    }
    if (email.length <= 3 || email.length >= 256) {
        errors.push("Your email must be between 3 to 256 characters long.");
    }
    // if (password.length === 0) {
    //     errors.push("Please enter a password.");
    // }
    // if (password !== confirmPassword) {
    //     errors.push("Your password must match the confirmation.");
    // }
    setErrors(errors);
    }, [show, username, email]);







    const editClickHandler = (event) => {
        event.preventDefault();

        setShow(true);
    };



    const onSubmit = e => {
        e.preventDefault();
        // if errors.length is 0 dispatch the the signup thunk
        if (errors.length === 0) {
            // dispatch(thunk_signupUser({ username, email, password }));
            setTimeout(() => {
                // history.push('/profile');
                // dispatch(thunk_checkIfThereIsAUser());
            }, 1000);
        } else {
            setReminder('Please check the above validation errors.');
        }
    };





    if(show === false) {
        return (
            <>
                <h1>{current_info.username}</h1>

                <h1>{current_info.email}</h1>

                <a onClick={(event) => editClickHandler(event)} >
                    Update
                </a>
            </>
        );
    }



    // show the update user form
    if (show === true) {
        return (
            <>
            <ErrorMessage type='sidebar' errors={errors} />

            <div className="reminder-signup">
                <p>{reminder}</p>
            </div>

            <form onSubmit={onSubmit} >
                <h1>Update User</h1>
                <Div selectors={[]} >
                    <label className='' htmlFor="username" /> Username
                    <br />
                    <input
                        type="text"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                        placeholder="Your Username Here"
                        id="username"
                        name="username"
                    />
                </Div>

                <Div selectors={[]} >
                    <label className='' htmlFor="email" /> Email
                    <br />
                    <input
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Your Email Here"
                        name='email'
                        id='email'
                    />
                </Div>
            </form>
            </>
        );
    }


};







export default EditUser;
