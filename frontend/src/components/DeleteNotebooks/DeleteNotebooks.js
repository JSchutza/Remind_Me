
import { useDispatch } from 'react-redux';
import { thunk_deleteNotebook } from '../../thunks/notebooks.js';
import { useMessage } from '../../context/MessageContext.js';





const DeleteNotebook = ({ notebookId }) => {
  const dispatch = useDispatch();
  const { setMessage } = useMessage();

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(thunk_deleteNotebook(notebookId));
    setMessage('Your notebook was removed.');
    setTimeout(() => {
      setMessage('');
    }, 1000);
  };




  return (
    <>
      <button
        onClick={(event) => clickHandler(event)}
      >Delete</button>
    </>
  );
};



export default DeleteNotebook;
