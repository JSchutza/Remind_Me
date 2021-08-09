import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from 'remark-gfm'



import { useDispatch } from 'react-redux';
import { thunk_createNewNote, thunk_updateNote, thunk_deleteNote } from '../../thunks/notes.js';



// css
import { styles } from '../Editor';










const Editor = ({ the_content = 'none', notebook_id, closeModal, homepage=false }) => {
    // state here
    const [ title, setTitle ] = useState(the_content?.title);
    const [ content, setContent ] = useState(the_content?.content);
    const [ showPreview, setShowPreview ] = useState(false);
    const [ editpane, setEditpane ] = useState(true);
    const [ first, setFirst ] = useState(0);
    const [ second, setSecond ] = useState(false);
    const [ buttontext, setButtontext ] = useState('Preview');
    const [ initStyle, setInitStyle ] = useState('');

    const dispatch = useDispatch();



    let renderers;
    renderers = {
        code: ({ language, value }) => {
            return (
            <SyntaxHighlighter
                customStyle={ {
                        border: `none`,
                        outline: `none`,
                        background: `black`,
                        resize: `none`,
                        lineBreak: `anywhere`
                    } }
                style={materialDark}
                showLineNumbers={true}
                language={language}
                children={value}
            />);
        }
    }







    useEffect(() => {
        if ((content === undefined || content === '') && (title === undefined || title === '')){
            setInitStyle('hidden');
        } else {
            setInitStyle('');
        }

    }, [title, content, showPreview, editpane, buttontext]);





    const previewClickHandler = (event) => {
        event.preventDefault();
        if (first === 0) {
            setButtontext('Edit');
            setShowPreview(true);
            setEditpane(false);
            setFirst(1);
            setSecond(true);
        }

        if (second === true) {
            setButtontext('Preview');
            setShowPreview(false);
            setEditpane(true);
            setSecond(false);
            setFirst(0);
        }

    };



    const notecreationClickHandler = (event) => {
        event.preventDefault();
        const payload = { due_date: new Date(), title, content, notebook_id };
        dispatch(thunk_createNewNote(payload));
        closeModal();
    };


    const noteUpdateClickHandler = (event, noteId) => {
        event.preventDefault();
        const payload = { due_date: new Date(), title, content, notebook_id, noteId };
        dispatch(thunk_updateNote(payload));
    };


    const noteDeleteClickHandler = (event, noteId) => {
        event.preventDefault();
        dispatch(thunk_deleteNote(noteId, notebook_id));
    };




    if(the_content !== 'none') {

    return (
        <>
            <div className={styles.preview_button} >
                <Link to={'/'} onClick={(event) => previewClickHandler(event)} >
                    <h4>{buttontext}</h4>
                </ Link>
            </div>

            <div className={styles.update_button}>
                <Link to={'/'} onClick={(event) => noteUpdateClickHandler(event, the_content.id)} >
                    <h4>Update</h4>
                </Link>
            </div>

            <div className={styles.delete_button}>
                <Link to={'/'} onClick={(event) => noteDeleteClickHandler(event, the_content.id)} >
                    <h4>Delete</h4>
                </Link>
            </div>





            {showPreview === true ?

                <div className={styles.preview_test}>
                    <div className={styles.preview_container}>
                        <div className={styles.preview_wrapper} >
                            <div className={styles.preview_title} >
                                <ReactMarkdown plugins={[gfm]} children={title} />
                            </div>

                            <div className={styles.preview_content} >
                                <ReactMarkdown renderers={renderers} plugins={[gfm]} children={content} />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }




            { editpane === true ?

                <div className={styles.edit_container} >
                    <div className={styles.edit_test} >

                        <div className={styles.edit_wrapper} >

                            <div className={styles.edit_title}>
                                <label>
                                    Title:
                                    <input
                                        onChange={(event) => setTitle(event.target.value)}
                                        value={title}
                                    />
                                </label>
                            </div>

                            <div className={styles.edit_content}>
                                <textarea
                                    onChange={(event) => setContent(event.target.value)}
                                    value={content}
                                />
                            </div>

                        </div>
                    </div>
                </div>


                :
                <></>
            }

        </>
        );
    }


    if (the_content === 'none') {

    return (
        <>
            <div className={styles.preview_button} >
                <Link to={'/'} onClick={(event) => previewClickHandler(event)} >
                    {!title?.length || !content?.length ?
                        <></>
                        :
                        <h4>{buttontext}</h4>
                    }
                </Link>
            </div>


            {showPreview === true ?

                <div className={styles.preview_test}>
                    <div className={styles.preview_container, `${initStyle}`}>
                        <div className={styles.preview_wrapper} >
                            <div className={styles.preview_title} >
                                <ReactMarkdown plugins={[gfm]} children={title} />
                            </div>

                            <div className={styles.preview_content} >
                                <ReactMarkdown renderers={renderers} plugins={[gfm]} children={content} />
                            </div>

                        </div>
                    </div>
                </div>

                :
                <></>
            }




            { editpane === true ?
                <>
                <div className={styles.edit_container} >
                    <div className={styles.edit_test} >

                        <div className={styles.edit_wrapper} >

                            <div className={styles.edit_title}>
                                <label>
                                    Title:
                                <input
                                    onChange={(event) => setTitle(event.target.value)}
                                    value={title}
                                />
                                </label>
                            </div>

                            <div className={styles.edit_content}>
                                <textarea
                                    onChange={(event) => setContent(event.target.value)}
                                    value={content}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    {homepage ?
                        <></>
                    :
                        <>
                            <Link to={'/'} onClick={event => notecreationClickHandler(event)}> Create </Link>
                        </>
                    }
                </div>
                </>
                :
                <></>
            }

            </>
        );
    }


};



export default Editor;
