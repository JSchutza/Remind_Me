
import { useDispatch } from 'react-redux';
import { thunk_deleteNotebook } from '../../thunks/notebooks.js';






const DeleteNotebook = ({ notebookId }) => {
  const dispatch = useDispatch();


  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(thunk_deleteNotebook(notebookId));
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
