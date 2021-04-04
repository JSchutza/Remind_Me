import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { useState, useEffect } from 'react';
import { thunk_getNoteBooks, thunk_notebookForPage, thunk_createNewNotebook } from '../../thunks/notebooks.js';
import Div from '../Div';
import DeleteNotebook from '../DeleteNotebooks';



// css
import { styles } from '../ShowNoteBooks';



const ShowNoteBooks = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const notebooks = useSelector((store) => store.notebooksReducer.notebooks );
  const status = useSelector((store) => store.deleteNotebookReducer.status);


  // state here
  const [ notebookname, setNotebookname ] = useState('');
  const [ triggerFetch, setTriggerFetch ] = useState(false);


  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  }, [dispatch, triggerFetch]);




  useEffect(() => {
    // error handling here

  }, [notebookname]);



  const newNotebookHandler = (event) => {
    event.preventDefault();
    // dispatch thunk to create /POST a note book
    dispatch(thunk_createNewNotebook({
      name: notebookname,
      description: null,
      notebook_owner: isUser.id
    }));

    setTriggerFetch(true);

    setTimeout(() => {
      setTriggerFetch(false);
    }, [2000])

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
      <div className={styles.show_outercontainer}>

      <Div selectors={[styles.notebooks_title]}>
      <h3>Notebooks</h3>
      </Div>


        <div className={styles.container}>
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

          <DeleteNotebook notebookId={eachNote.id} />
        </>
      ))}
      </ul>
      <br/>

        <Div selectors={[styles.notebooks_create_title]} >
        <h3>Create a Notebook</h3>
      </Div>

      <Div selectors={[]}>

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
                onClick={(event) => newNotebookHandler(event)}
              > Create </a>
          </Div>

        </Div>

        <Div selectors={[]} >

            {triggerFetch === true ?

            <Div selectors={[]} >
              <h2>{notebookname} was successfully created. </h2>
            </Div>

            :
            <p></p>
            }
        </Div>

      </div>
      </div>
    </>
  );

};




export default ShowNoteBooks;
