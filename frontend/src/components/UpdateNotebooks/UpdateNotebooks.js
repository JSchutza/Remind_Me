
import { useDispatch } from 'react-redux';
import { thunk_updateNotebook } from '../../thunks/notebooks.js';
// import { useMessage } from '../../context/MessageContext.js';





const UpdateNotebooks = ({ notebookId }) => {
  const dispatch = useDispatch();
  // const { setMessage } = useMessage();

  const clickHandler = (event) => {
    event.preventDefault();
    // dispatch(thunk_updateNotebook(notebookId));
    // setMessage('Your notebook was removed.');
    // setTimeout(() => {
    //   setMessage('');
    // }, 1000);
  };




  return (
    <>
      <button
        onClick={(event) => clickHandler(event)}
      >Update</button>
    </>
  );
};



export default UpdateNotebooks;
