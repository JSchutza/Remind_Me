import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "nanoid";
import { thunk_createNewNote, thunk_updateNote, thunk_deleteNote } from '../../thunks/notes.js';
import { clearError, clearUpdateNoteError } from '../../actions/error.js';
import { useEditor } from '../../context/EditorContext.js';
// css
import { styles } from '../Editor';
import Error from "../Error";
import EditorNav from "./EditorNav.js";
import {doc, updateDoc} from "firebase/firestore";
import {useFirebaseApp, useFirestore, useFirestoreDocData} from "reactfire";
import {getAuth} from "firebase/auth";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";






export const CodeEditor = ({ the_content = 'none', notebook_id, closeModal, homepage=false }) => {
    const defaultTitle = the_content?.title  ?  the_content?.title : '';
    const defaultContent = the_content?.content  ?  the_content?.content : '';

    // state here
    const [ title, setTitle ] = useState(defaultTitle);
    const [ content, setContent ] = useState(defaultContent);
    const [ error, setError ] = useState([]);

    const { EachEditor } = useEditor();
    const errors = useSelector(store => store.noteErrorReducer.errors);
    const dispatch = useDispatch();
    let delayClearErrors;
    // get the firestore document reference
    const notesRef = doc(useFirestore(), "Notes", "WeJNP1GkfLig2GQdQ4ED")
    // subscribe to the document for realtime updates.
    const { status: notesStatus, data: notesData } = useFirestoreDocData(notesRef)
    const app = useFirebaseApp()
    const auth = getAuth(app)



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





    const handleEditorChange = (value, event) => { setContent(value); }




    const notecreationClickHandler = async event => {
        event.preventDefault();
        const userId = auth.currentUser?.uid
        const newNoteId = nanoid()
        const prevNotes = notesData?.Notes?.[userId]?.[notebook_id]
        const newNote = { title, content, "id": newNoteId };
        prevNotes.push(newNote)
        const restOfNotes = notesData?.Notes?.[userId]
        delete notesData?.Notes?.[userId]?.[notebook_id]
        delete notesData?.Notes?.[userId]
        const payload = { Notes: { [userId]: { [notebook_id]: prevNotes, ...restOfNotes }, ...notesData?.Notes } };
        updateDoc(notesRef, payload)
        closeModal();
        // const success = await dispatch(thunk_createNewNote(payload));
    };


    const noteUpdateClickHandler = async (event, noteId) => {
        event.preventDefault();
        const userId = auth.currentUser?.uid
        const updatedNote = { title, content, "id": noteId };
        const prevNotes = notesData?.Notes?.[userId]?.[notebook_id]
        const filteredNote = prevNotes.filter((eachNote) => eachNote.id !== noteId)
        filteredNote.push(updatedNote)
        const otherNotes = notesData?.Notes?.[userId]
        delete otherNotes[notebook_id]
        delete notesData?.Notes?.[userId]
        const payload = { Notes: {
                [userId]: { [notebook_id]: filteredNote, ...otherNotes  }, ...notesData?.Notes
            }
        };
        updateDoc(notesRef, payload)
        // const success = await dispatch(thunk_updateNote(payload));
        // if there was an error with the update
        // if(success === undefined) {
        //     delayClearErrors = setTimeout(() => {
        //         dispatch(clearUpdateNoteError());
        //     }, 2000);
        // }
    };


    const noteDeleteClickHandler = (event, noteId) => {
        event.preventDefault();
        const userId = auth.currentUser?.uid
        const prevNotes = notesData?.Notes?.[userId]?.[notebook_id]
        const filteredNote = prevNotes.filter((eachNote) => eachNote.id !== noteId)
        const otherNotes = notesData?.Notes?.[userId]
        delete otherNotes[notebook_id]
        delete notesData?.Notes?.[userId]
        const payload = { Notes: {
                [userId]: { [notebook_id]: filteredNote, ...otherNotes  }, ...notesData?.Notes
            }
        };
        updateDoc(notesRef, payload)
        // dispatch(thunk_deleteNote(noteId, notebook_id));
    };






    // todo if the user is authenticated allow them to select which notebook this note will be added to.
    const CreateNoteButton = () => {
        return (
            <>
            {homepage ? null :
                <div className={styles.create_note_button}
                  onClick={(event) => notecreationClickHandler(event)}
                >
                  <Link to='/' onClick={(event) => notecreationClickHandler(event)} > Create </Link>
                </div>
            }
            </>
        )
    };





    const UpdateDeleteButtons = () => {
      return (
        <div className={styles.update_delete_wrap}>
          <div className={styles.update_button}
            onClick={(event) => noteUpdateClickHandler(event, the_content.id)}
          >
            <Link
              to={'/'}
              onClick={(event) => noteUpdateClickHandler(event, the_content.id)}
            >
              <h5>Update</h5>
            </Link>
          </div>

          <div className={styles.delete_button}
            onClick={(event) => noteDeleteClickHandler(event, the_content.id)}
          >
            <Link
              to={'/'}
              onClick={(event) => noteDeleteClickHandler(event, the_content.id)}
            >
              <h5>Delete</h5>
            </Link>
          </div>
        </div>
      );
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
          <label>Title:</label>
          <br />

          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            aria-label='Title'
          />
        </div>

        <EachEditor
          title={title}
          content={content}
          handleEditorChange={handleEditorChange}
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
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle><label>Title:</label></IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <input
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        aria-label='Title'
                    />
                </IonCardContent>
            </IonCard>
        </div>

          <EachEditor
              title={title}
              content={content}
              handleEditorChange={handleEditorChange}
          />
      </>
    );
    }


};

