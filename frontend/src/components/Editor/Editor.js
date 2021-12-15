import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



import Editor from '@monaco-editor/react';



import { useDispatch, useSelector } from 'react-redux';
import { thunk_createNewNote, thunk_updateNote, thunk_deleteNote } from '../../thunks/notes.js';
import { clearError, clearUpdateNoteError } from '../../actions/error.js';



// css
import { styles } from '../Editor';

import Error from "../Error";
import EditorNav from "./EditorNav.js";








const CodeEditor = ({ the_content = 'none', notebook_id, closeModal, homepage=false }) => {
    const defaultTitle = the_content?.title  ?  the_content?.title : '';
    const defaultContent = the_content?.content  ?  the_content?.content : '';
    // state here
    const [ title, setTitle ] = useState(defaultTitle);
    const [ content, setContent ] = useState(defaultContent);
    const [ language, setLanguage ] = useState('javascript');
    const [ langType, setLangType ] = useState('// javascript code here');

    const [ error, setError ] = useState([]);

    const errors = useSelector(store => store.noteErrorReducer.errors);
    const dispatch = useDispatch();
    let delayClearErrors;



    // error useEffect here
    useEffect(() => {
        if (errors !== null) {
            setError(errors)
        }
        return () => {
            clearTimeout(delayClearErrors);
            setError([]);
        }
    },[errors]);




    const handleEditorChange = (value, event) => {
      setContent(value);
    }




    const notecreationClickHandler = async event => {
        event.preventDefault();
        const payload = { due_date: new Date(), title, content, notebook_id };
        const success = await dispatch(thunk_createNewNote(payload));
        if(success) {
            closeModal();
        }
    };






    const noteUpdateClickHandler = async (event, noteId) => {
        event.preventDefault();
        const payload = { due_date: new Date(), title, content, notebook_id, noteId };
        const success = await dispatch(thunk_updateNote(payload));
        // if there was an error with the update
        if(success === undefined) {
            delayClearErrors = setTimeout(() => {
                dispatch(clearUpdateNoteError());
            }, 2000);
        }
    };





    const noteDeleteClickHandler = (event, noteId) => {
        event.preventDefault();
        dispatch(thunk_deleteNote(noteId, notebook_id));
    };






    const CreateNoteButton = () => {
        return (
            <>
            {homepage ? null :
                <div className={styles.create_note_button}>
                  <Link to='/' onClick={(event) => notecreationClickHandler(event)} > Create </Link>
                </div>
            }
            </>
        )
    };





    const UpdateDeleteButtons = () => {
      return (
        <>
          <div className={styles.update_button}>
            <Link
              to={'/'}
              onClick={(event) => noteUpdateClickHandler(event, the_content.id)}
              >
              <h4>Update</h4>
            </Link>
          </div>

          <div className={styles.delete_button}>
            <Link
              to={'/'}
              onClick={(event) => noteDeleteClickHandler(event, the_content.id)}
              >
              <h4>Delete</h4>
            </Link>
          </div>
        </>
      )
    };







    // if it is an update / there should be content in the editor
    if(the_content !== 'none') {

    return (
      <>
        <UpdateDeleteButtons />

        <div className={styles.edit_errors}>
          <Error error={error} />
        </div>

        <EditorNav content={content} setContent={setContent} />

        <div className={styles.edit_title}>
          <label>
            Title:
            <input
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              aria-label='Title'
            />
          </label>
        </div>

        <Editor
          height='90vh'
          defaultLanguage={language}
          defaultValue={langType}
          value={content}
          onChange={handleEditorChange}
          theme='vs-dark'
        />
      </>
    );
    }





    // if it is a fresh editor WITHOUT content
    if (the_content === 'none') {


    return (
      <>
        <CreateNoteButton />

        <EditorNav
          content={content}
          setContent={setContent}
          freshEditor={true}
        />

        <div className={styles.edit_title}>
          <label>
            Title:
            <input
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              aria-label='Title'
            />
          </label>
        </div>

        <Editor
          height='90vh'
          defaultLanguage={language}
          defaultValue={langType}
          value={content}
          onChange={handleEditorChange}
          theme='vs-dark'
        />
      </>
    );
    }


};



export default CodeEditor;
