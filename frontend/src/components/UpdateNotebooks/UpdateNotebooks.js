
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { thunk_updateNotebook } from '../../thunks/notebooks.js';
// import { useMessage } from '../../context/MessageContext.js';





const UpdateNotebooks = ({ notebookId }) => {
  const dispatch = useDispatch();
  const [ showform, setShowForm ] = useState(false);
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');


  const clickHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
    };


  const onSubmit = event => {
      event.preventDefault();
      const payload = { notebookId, name, description };
      dispatch(thunk_updateNotebook(payload));
  }


  if(showform) {
    return (
      <>
      <form onSubmit={onSubmit}>

      <label>
        Notebook Name
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>

      <label>
        Notebook Description
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          />
        </label>

        <button type='submit'> Update </button>
      </form>
      </>
    )
  }



  return (
    <>
      <button onClick={(event) => clickHandler(event)} >Update</button>
    </>
  );
};



export default UpdateNotebooks;
