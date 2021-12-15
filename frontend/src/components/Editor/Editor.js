import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// import ReactMarkdown from 'react-markdown'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { materialDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import gfm from 'remark-gfm'
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


    const [ error, setError ] = useState([]);

    const errors = useSelector(store => store.noteErrorReducer.errors);
    const dispatch = useDispatch();
    let delayClearErrors;


    // let renderers;
    // renderers = {
    //     code: ({ language, value }) => {
    //         return (
    //         <SyntaxHighlighter
    //             customStyle={ {
    //                     border: `none`,
    //                     outline: `none`,
    //                     background: `black`,
    //                     resize: `none`,
    //                     lineBreak: `anywhere`
    //                 } }
    //             style={materialDark}
    //             showLineNumbers={true}
    //             language={language}
    //             children={value}
    //         />);
    //     }
    // }




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





    // const MarkdownViewer = () => {
    //   return (
    //     <div className={styles.preview_test}>
    //       <div className={styles.preview_container}>
    //         <div className={styles.preview_wrapper}>
    //           <div className={styles.preview_title}>
    //             <ReactMarkdown plugins={[gfm]} children={title} />
    //           </div>

    //           <div className={styles.preview_content}>
    //             <ReactMarkdown
    //               renderers={renderers}
    //               plugins={[gfm]}
    //               children={content}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };





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




    const TitleInput = () => {
      return (
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
      );
    }



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

        <TitleInput />

        <Editor
          height='90vh'
          defaultLanguage='javascript'
          defaultValue='// some comment'
          value={content}
          onChange={(event) => setContent(event.target.value)}
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

        <TitleInput />

        <Editor
          height='90vh'
          defaultLanguage='javascript'
          defaultValue='// some comment'
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </>
    );
    }


};



export default CodeEditor;
