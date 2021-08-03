import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';
import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import { mostRecentNotes } from '../../actions/notes.js';
import NoteViewer from '../NoteViewer';
import NoteCreator from '../NoteCreator';
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
  const [ clicked, setClicked ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ loaded, setLoaded ] = useState(false);
  const [ showCreateButton, setShowCreateButton ] = useState(false);
  const [ first, setFirst ] = useState(0);
  const [ second, setSecond ] = useState(false);
  const [ imgUrl, setImgUrl ] = useState(closed_img);

  const [ firstclick,  setFirstClick ] = useState(0);
  const [ secondclick,  setSecondClick ] = useState(false);

  // important that this is NOT state as it will cause to many re-renders
  let length = [];


  useEffect(() => {
    dispatch(thunk_notebookForPage(notebookId));
    dispatch(thunk_getSpecificNote(notebookId))
      .then(() => setLoaded(true));
  },[dispatch, clicked, data]);



  if(loaded && allNotes !== null){
    length = Object.keys(allNotes);
  }





  const noteClickHandler = (event, payload) => {
    event.preventDefault();

    if(first === 0) {
      setData(payload);
      dispatch(mostRecentNotes(payload));
      setClicked(true);
      setImgUrl(open_img);
      setFirst(1);
      setSecond(true);
    }

    if (second === true) {
      setClicked(false);
      setImgUrl(closed_img);
      setSecond(false);
      setFirst(0);
    }


  };


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


  if(allNotes === null && loaded === true) {
    return (
      <>
        <Div selectors={[]}>
          <ul>
            <Div selectors={[]}>
              <Div selectors={[]}>
                {/* <Link> */}
                  <img src={`${open_img}`} />
                  <li>{notebook_info.name}</li>
                {/* </Link> */}
              </Div>
            </Div>
          </ul>
          </ Div>
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
                <img src={`${open_img}`} />
              <li>{notebook_info.name}</li>
            </Div>

            <Div selectors={[]}>
            <ul>

              <Div selectors={[]}>
                    <img src={`${imgUrl}`} />

                {length.map(eachIndex => (
                  <li key={allNotes[eachIndex].id}>
                    <Link
                      onClick={(event) => noteClickHandler(event, {
                        id: allNotes[eachIndex].id,
                        due_date: allNotes[eachIndex].due_date,
                        title: allNotes[eachIndex].title,
                        content: allNotes[eachIndex].content,
                        notebook_id: allNotes[eachIndex].notebook_id,
                        createdAt: allNotes[eachIndex].createdAt,
                        updatedAt: allNotes[eachIndex].updatedAt
                      })}
                      > {allNotes[eachIndex].title} </Link>

                  </li>
                ))}
                </Div>
            </ul>
            </Div>

            </Div>
        </ul>
      </Div>


        { clicked ? <NoteViewer the_content={data} notebook_id={data.id} /> : <div></div> }

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
