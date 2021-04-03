import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';
import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import { mostRecentNotes } from '../../actions/notes.js';
import NoteViewer from '../NoteViewer';
import NoteCreator from '../NoteCreator';
import Div from '../Div';

//css
import { styles } from '../NotebookPage';



const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const notebook_info = useSelector((store) => store.notebookPageReducer.notebook)
  const allNotes = useSelector((store) => store.notesReducer.notes)
  // state here
  const [ clicked, setClicked ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ loaded, setLoaded ] = useState(false);
  const [ showCreateButton, setShowCreateButton ] = useState(true);


  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId))
      .then(() => setLoaded(true));
  },[dispatch, clicked, data]);


  const noteClickHandler = (event, payload) => {
    event.preventDefault();
    setClicked(true);
    setData(payload);
    // send dispatch to recent notes reducer
    dispatch(mostRecentNotes(payload));
  };


  const toggleNoteCreator = (event) => {
    event.preventDefault();
    setShowCreateButton(false);

  }


  if(allNotes === null && loaded === true) {
    return (
      <>
        <Div selectors={[]}>
          <ul>
            <Div selectors={[]}>
              <Div selectors={[]}>
                <li>{notebook_info.name}</li>
              </Div>
            </Div>
          </ul>

          {showCreateButton === true ?
          <Div selectors={[]} >
            <a
              onClick={(event) => toggleNoteCreator(event)}
            >
              <h4>Create a Note</h4>
            </a>
          </Div>
          :
            <NoteCreator />
          }

        </Div>
      </>
    )
  }




  if(notebook_info === null || allNotes === null) {
    return null;
  }


  if (loaded === true) {
    return (
      <>

      <Div selectors={[]}>
        <ul>

          <Div selectors={[]}>
            <Div selectors={[]}>
              <li>{notebook_info.name}</li>
            </Div>

            <Div selectors={[]}>
            <ul>

              <Div selectors={[]}>
                <li key={allNotes[0].id}>
                  <a
                    onClick={(event) => noteClickHandler(event, {
                      id: allNotes[0].id,
                      due_date: allNotes[0].due_date,
                      title: allNotes[0].title,
                      content: allNotes[0].content,
                      notebook_id: allNotes[0].notebook_id,
                      createdAt: allNotes[0].createdAt,
                      updatedAt: allNotes[0].updatedAt
                    })}
                    >
                      <Div selectors={[]}>
                      <img src='' />
                      </Div>

                    {allNotes[0].title} </a>

                </li>
                </Div>
            </ul>
            </Div>

            </Div>
        </ul>
      </Div>


        { clicked ? <NoteViewer the_content={data} /> : <div></div> }
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
