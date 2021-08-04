import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';
import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import { mostRecentNotes } from '../../actions/notes.js';

import NoteCreator from '../NoteCreator';
import DropDownArrow from '../DropDownArrow';
import Div from '../Div';
import open_img from './open_folder.svg';
import closed_img from './closed_folder.svg';

//css
import { styles } from '../NotebookPage';



const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const notebook_info = useSelector((store) => store.notebookPageReducer.notebook)
  const allNotes = useSelector((store) => store.notesReducer.notes)
  // state here
  const [ loaded, setLoaded ] = useState(false);
  const [ showCreateButton, setShowCreateButton ] = useState(false);

  const [ firstclick,  setFirstClick ] = useState(0);
  const [ secondclick,  setSecondClick ] = useState(false);

  // important that this is NOT state as it will cause to many re-renders
  let length = [];


  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId))
      .then(() => setLoaded(true));
  },[dispatch]);



  if(loaded && allNotes !== null){
    length = Object.keys(allNotes);
  }







  const toggleNoteCreator = (event) => {
    event.preventDefault();
    if (firstclick === 0){
      setShowCreateButton(true);
      setSecondClick(true);
      setFirstClick(1);
    }

    if (secondclick === true) {
      setShowCreateButton(false);
      setSecondClick(false);
      setFirstClick(0);
    }

  }







  if(notebook_info === null || allNotes === null) {
    return null;
  }


  if (loaded === true) {
    return (
      <>
          <p>{notebook_info.name}</p>
            <ul>
                {length.map(eachIndex => (
                  <li key={allNotes[eachIndex].id}>
                    <DropDownArrow
                        payload={ {
                          id: allNotes[eachIndex].id,
                          due_date: allNotes[eachIndex].due_date,
                          title: allNotes[eachIndex].title,
                          content: allNotes[eachIndex].content,
                          notebook_id: allNotes[eachIndex].notebook_id,
                          createdAt: allNotes[eachIndex].createdAt,
                          updatedAt: allNotes[eachIndex].updatedAt
                        } }

                        closedImg={closed_img}
                        openedImg={open_img}
                        title={allNotes[eachIndex].title}
                    />
                  </li>
                ))}
            </ul>


        <Div selectors={[]} >
          <Link
            onClick={(event) => toggleNoteCreator(event)}
          >
            <h4>New Note</h4>
          </Link>
          {showCreateButton ?
            <NoteCreator notebook_id={notebookId} />
          :
          <></>
          }
        </Div>

      </>
    );
  } else {
    return (
      <>
      <Div selectors={[]}>
        <h1>Fetching Your Data, One Moment Please...</h1>
      </Div>
      </>

    );
  }

};




export default NotebookPage;
