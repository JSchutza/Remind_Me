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
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(false);

  // important that this is NOT state as it will cause to many re-renders
  let length = [];


  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId))
      .then(() => setLoaded(true));
  },[dispatch, clicked, data]);



  if(loaded){
    length = Object.keys(allNotes);
  }





  const noteClickHandler = (event, payload) => {
    event.preventDefault();

    if(first === 0) {
      setData(payload);
      dispatch(mostRecentNotes(payload));
      setClicked(true);
      setFirst(1);
      setSecond(true);
    }

    if (second === true) {
      setClicked(false);
      setSecond(false);
      setFirst(0);
    }


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
            <NoteCreator notebook_id={notebookId} />
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
                {length.map(eachIndex => (
                  <li key={allNotes[eachIndex].id}>
                    <a
                      onClick={(event) => noteClickHandler(event, {
                        id: allNotes[eachIndex].id,
                        due_date: allNotes[eachIndex].due_date,
                        title: allNotes[eachIndex].title,
                        content: allNotes[eachIndex].content,
                        notebook_id: allNotes[eachIndex].notebook_id,
                        createdAt: allNotes[eachIndex].createdAt,
                        updatedAt: allNotes[eachIndex].updatedAt
                      })}
                      >
                        <Div selectors={[]}>
                        <img src='' />
                        </Div>

                      {allNotes[eachIndex].title} </a>

                  </li>
                ))}
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
