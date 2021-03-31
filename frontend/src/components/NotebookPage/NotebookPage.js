import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';
import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import NoteViewer from '../NoteViewer';





const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const notebook_info = useSelector((store) => store.notebookPageReducer.notebook)
  const allNotes = useSelector((store) => store.notesReducer.notes)
  // state here
  const [ clicked, setClicked ] = useState(false);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId));
  },[dispatch, clicked, data]);


  const noteClickHandler = (event, payload) => {
    event.preventDefault();
    setClicked(true);
    setData(payload);
  };


  if(notebook_info === null || allNotes === null) {
    return null;
  }


  return (
    <>
      <ul>
        <li>{notebook_info.name}</li>
          <ul>
            {Object.values(allNotes).map(note => (
              <li key={note.id}>
                <a
                  onClick={(event) => noteClickHandler(event, {
                    id: note.id,
                    due_date: note.due_date,
                    title: note.title,
                    content: note.content,
                    notebook_id: note.notebook_id,
                    createdAt: note.createdAt,
                    updatedAt: note.updatedAt
                  })}
                > {note.title} </a>
              </li>
            ))}
          </ul>
      </ul>


      { clicked ? <NoteViewer the_content={data} /> : <div></div> }
    </>
  );
};




export default NotebookPage;
