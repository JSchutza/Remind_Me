import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { useState, useEffect } from 'react';
import { thunk_getNoteBooks, thunk_notebookForPage } from '../../thunks/notebooks.js';
import Div from '../Div';

// css
import { styles } from '../ShowNoteBooks';



const ShowNoteBooks = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const notebooks = useSelector((store) => store.notebooksReducer.notebooks );

  const [ notebookname, setNotebookname ] = useState('');


  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  }, [dispatch]);



  useEffect(() => {
    // error handling here

  }, [notebookname]);



  const newNotebookHandler = (event) => {
    event.preventDefault();
    // dispatch thunk to create /POST a note book
  };




  const notebookHandler = (notebookId) => {
    dispatch(thunk_notebookForPage(notebookId));
  }




  if(notebooks === null) {
    return (
      <>
      <h1>Notebooks</h1>
        <h3>You currently do not have any notebooks</h3>
      </>
    );
  }


  return (
    <>
      <Div selectors={[styles.show_outercontainer]}>

      <Div selectors={[styles.notebooks_title]}>
      <h3>Notebooks</h3>
      </Div>


      <Div selectors={[styles.container]}>
      <ul>
      {Object.values(notebooks).map(eachNote => (
        <>
        <Div selectors={[styles.notebooks_links]} >

        <NavLink
          key={eachNote.id}
          to={`/notebook/${eachNote.id}`}
          onClick={notebookHandler(eachNote.id)}

          > {eachNote.name} </NavLink>
        <br/>
          </Div>
        </>
      ))}
      </ul>
      <br/>

        <Div selectors={[styles.notebooks_create_title]} >
        <h3>Create a Notebook</h3>
      </Div>

      <br/>

        <Div selectors={[styles.newnotebook_input]}>
          <label>
              Notebook Name
            <input
                value={notebookname}
                onChange={(event) => setNotebookname(event.target.value)}
              />
          </label>


            <Div selectors={[styles.create_notebooks_link]}>
              <a
                onChange={(event) => newNotebookHandler(event)}
              > Create </a>
          </Div>

        </Div>

      </Div>
      </Div>
    </>
  );

};




export default ShowNoteBooks;
