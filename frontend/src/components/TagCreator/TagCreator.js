import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useError } from '../../context/ErrorContext.js';


import Div from '../Div';




const TagCreator = () => {
//state here
  const [ tagname, setTagname ] = useState('');
  const [ reminder, setReminder ] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const { errors, setErrors } = useError();




  useEffect(() => {
    const errors = [];
    if (tagname.includes('@') || tagname.includes('.')) {
      errors.push("You can not have an email for a tagname, sorry!");
    }
    if (tagname.length <= 3 || tagname.length >= 30) {
      errors.push("Your tagname must be between 3 to 30 characters long.");
    }
    if (tagname.length === 0) {
      errors.push("You must input an tagname.")
    }

    setErrors(errors);
  }, [tagname]);








  const onSubmit = e => {
    e.preventDefault();
    // if errors.length is 0 dispatch the the signup thunk
    if (errors.length === 0) {
      // dispatch(thunk_signupUser({ username, email, password }));

      setTimeout(() => {
        history.push('/profile');
        // dispatch(thunk_checkIfThereIsAUser());
      }, 1000);
    } else {
      setReminder('Please check the above validation errors.');
    }

  };








  return (
    <>
    <Div selectors={[]}>
      <form onSubmit={onSubmit}>

        <Div selectors={[]} >
          <label className='' htmlFor="" /> Tag Name
            <br />
          <input
            type='text'
            onChange={(e) => setTagname(e.target.value)}
            value={tagname}
            placeholder="Tagname Here"
            name='tagname'
            id='tagname'
          />
        </Div>


        <button>Create</button>

      <div className="reminder-signup">
        <p>{reminder}</p>
      </div>
      </form>
      </Div>
    </>
  );

};





export default TagCreator;
