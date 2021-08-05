import { Switch, Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { useState, useEffect } from 'react';
import { thunk_getNoteBooks, thunk_notebookForPage, thunk_createNewNotebook } from '../../thunks/notebooks.js';
import Div from '../Div';
import DeleteNotebook from '../DeleteNotebooks';
import UpdateNotebooks from '../UpdateNotebooks';
import { useMessage } from '../../context/MessageContext.js';


// css
import { styles } from '../ShowNoteBooks';



const ShowNoteBooks = ({ limit=null}) => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const notebooks = useSelector((store) => store.notebooksReducer.notebooks);
  // const status = useSelector((store) => store.deleteNotebookReducer.status);
  const { message } = useMessage();

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

  let limitedNotebooks = Object.values(notebooks);
  let result = [limitedNotebooks[limitedNotebooks.length - 1], limitedNotebooks[limitedNotebooks.length - 2], limitedNotebooks[limitedNotebooks.length - 3]];



  return (
    <>

      <Div selectors={[styles.notebooks_title]}>
        <h3>Notebooks</h3>
          <h4>{message}</h4>
      </Div>



      <ul>

      {limit === null ?
      <>
      {Object.values(notebooks).map(eachNote => (
        <>
        <Div selectors={[]}>
          <Div selectors={[styles.notebooks_links]} >
            <NavLink key={eachNote.id} to={`/notebook/${eachNote.id}`} onClick={notebookHandler(eachNote.id)} > {eachNote.name} </NavLink>
          </Div>


            <Div selectors={[]}>
              <DeleteNotebook notebookId={eachNote.id} />
            </Div>

            <Div selectors={[]}>
              <UpdateNotebooks notebookId={eachNote.id} />
            </Div>
          </Div>
        </>
      ))}
      </>

      :

      <>
      {result.map(eachNote => (
        <>
          <Div selectors={[]}>
            <Div selectors={[styles.notebooks_links]} >
              <NavLink key={eachNote.id} to={`/notebook/${eachNote.id}`} onClick={notebookHandler(eachNote.id)} > {eachNote.name} </NavLink>
            </Div>


            <Div selectors={[]}>
              <DeleteNotebook notebookId={eachNote.id} />
            </Div>

            <Div selectors={[]}>
              <UpdateNotebooks notebookId={eachNote.id} />
            </Div>
          </Div>
        </>
      ))}
      </>
      }
      </ul>
      <br/>




        <Div selectors={[styles.notebooks_create_title]} >
          <h3>Create a Notebook</h3>
        </Div>

        <Div selectors={[styles.newnotebook_input]}>
          <label>
              Notebook Name
            <input
                value={notebookname}
                onChange={(event) => setNotebookname(event.target.value)}
              />
          </label>


          <Div selectors={[styles.notebook_creation_message]} >
            {triggerFetch ?
            <Div selectors={[]} >
              <h2>{notebookname} was successfully created. </h2>
            </Div>
            :
            <></>
            }
        </Div>

        </Div>

          <div className={styles.create_notebooks_link}>
            <Link
              onClick={(event) => newNotebookHandler(event)}
            > Create </Link>
          </div>

    </>
  );

};




export default ShowNoteBooks;
