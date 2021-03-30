import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';
import { thunk_notebookForPage } from '../../thunks/notebooks.js';






const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const notebook_info = useSelector((store) => store.notebookPageReducer.notebook)
  const allNotes = useSelector((store) => store.notesReducer.notes)
  // state here
  const [ first, setFirst ] = useState(false);


  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId));
  },[dispatch]);


  const noteClickHandler = (event) => {
    event.preventDefault();

  };


  if(notebook_info === null || allNotes === null) {
    return null;
  }


  return (
    <>
      <h1>Individual Notebook Page</h1>
      <ul>
        <li>{notebook_info.name}</li>
          <ul>
            {Object.values(allNotes).map(note => (
              <li key={note.id}>
                <a
                  onClick={noteClickHandler}
                > {note.title} </a>
              </li>
            ))}
          </ul>
      </ul>

      
    </>
  );
};




export default NotebookPage;
