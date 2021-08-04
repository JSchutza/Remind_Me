import { useState, useEffect } from 'react';
import Div from '../Div';
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import gfm from 'remark-gfm'
import { useTheme } from '../../context/ThemeContext.js';

import { useDispatch } from 'react-redux';
import { thunk_createNewNote, thunk_updateNote, thunk_deleteNote } from '../../thunks/notes.js';
import { useMessage } from '../../context/MessageContext.js';

// css
import { styles } from '../Editor';










const Editor = ({ the_content = 'none', first_creation = false, notebook_id }) => {
    // state here
    const [title, setTitle] = useState(the_content?.title);
    const [content, setContent] = useState(the_content?.content);
    const [showPreview, setShowPreview] = useState(false);
    const [editpane, setEditpane ] = useState(true);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(false);
    const [buttontext, setButtontext] = useState('Preview');
    const [initStyle, setInitStyle] = useState('');

    const dispatch = useDispatch();

    const { message, setMessage } = useMessage();
    const { themeType, setThemeType } = useTheme();
    let renderers;


    if(themeType.type === 'Light') {
            renderers = {
                code: ({ language, value }) => {
                    return (
                    <SyntaxHighlighter
                        customStyle={
                            {
                                border: `none`,
                                outline: `none`,
                                background: `black`,
                                resize: `none`,
                                lineBreak: `anywhere`,

                            }
                        }
                            style={themeType.light_syntax}
                        showLineNumbers={true}
                        language={language}
                        children={value}
                    />
                    );
                }
            }
        } else if(themeType.type === 'Dark') {

            renderers = {
                code: ({ language, value }) => {
                    return (
                    <SyntaxHighlighter
                        customStyle={
                            {
                                border: `none`,
                                outline: `none`,
                                background: `black`,
                                resize: `none`,
                                lineBreak: `anywhere`,

                            }
                        }
                            style={themeType.dark_syntax}
                        showLineNumbers={true}
                        language={language}
                        children={value}
                    />
                    );
                }
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
    dispatch(thunk_createNewNote({
        due_date: new Date(),
        title,
        content,
        notebook_id
    }));
    setMessage('Your note was created.');

    setTimeout(() => {
        setMessage('');
    }, 1000);
};


    const noteUpdateClickHandler = (event, noteId) => {
    dispatch(thunk_updateNote({
        due_date: new Date(),
        title,
        content,
        notebook_id,
        noteId
    }));
    setMessage('Your note was updated.');

    setTimeout(() => {
        setMessage('');
    }, 1000);

};


const noteDeleteClickHandler = (event, noteId) => {
    dispatch(thunk_deleteNote(noteId, notebook_id));
    setMessage('Your has been deleted.');

    setTimeout(() => {
        setMessage('');
    }, 1000);
};




if(the_content !== 'none') {

return (
    <>
        <Div selectors={[styles.preview_button]} >
            <Link
                onClick={(event) => previewClickHandler(event)}
            >
                <h4>{buttontext}</h4>
            </ Link>
        </Div>
        <Div selectors={[styles.update_button]}>
            <Link
                onClick={(event) => noteUpdateClickHandler(event, the_content.id)}
            >
                <h4>Update</h4>
            </Link>

            <h4>{message}</h4>
        </Div>

        <Div selectors={[styles.delete_button]}>
            <Link
                onClick={(event) => noteDeleteClickHandler(event, the_content.id)}
            >
                <h4>Delete</h4>
            </Link>

            <h4>{message}</h4>
        </Div>



        {showPreview === true ?

            <Div selectors={[styles.preview_test]}>
                <Div selectors={[styles.preview_container]}>
                    <Div selectors={[styles.preview_wrapper]} >
                        <Div selectors={[styles.preview_title]} >
                            <ReactMarkdown plugins={[gfm]} children={title} />
                        </Div>

                        <Div selectors={[styles.preview_content]} >
                            <ReactMarkdown renderers={renderers} plugins={[gfm]} children={content} />
                        </Div>

                    </Div>

                </Div>
            </Div>
            :
            <p></p>
        }




        { editpane === true ?

            <Div selectors={[styles.edit_container]} >
                <Div selectors={[styles.edit_test]} >

                    <Div selectors={[styles.edit_wrapper]} >

                        <Div selectors={[styles.edit_title]}>
                            <label>
                                Title:
                                <input
                                    onChange={(event) => setTitle(event.target.value)}
                                    value={title}
                                />
                            </label>
                        </Div>

                        <Div selectors={[styles.edit_content]}>
                            <textarea
                                onChange={(event) => setContent(event.target.value)}
                                value={content}
                            />
                        </Div>

                    </Div>
                </Div>

            </Div>

            :
            <p></p>
        }

    </>
    );
}


    if (the_content === 'none') {

        return (
            <>
                <Div selectors={[styles.preview_button]} >
                    <Link
                        onClick={(event) => previewClickHandler(event)}
                    >
                        <h4>{buttontext}</h4>
                    </Link>
                </Div>

                {first_creation === true ?
                    <Div selectors={[]} >
                        <Link
                            onClick={(event) => notecreationClickHandler(event)}
                        >
                            <h4>Create</h4>
                        </Link>

                        <h4>{message}</h4>
                    </Div>
                    :
                    <p></p>
                }


                {showPreview === true ?

                    <Div selectors={[styles.preview_test]}>
                        <Div selectors={[styles.preview_container, `${initStyle}`]}>
                            <Div selectors={[styles.preview_wrapper]} >
                                <Div selectors={[styles.preview_title]} >
                                    <ReactMarkdown plugins={[gfm]} children={title} />
                                </Div>

                                <Div selectors={[styles.preview_content]} >
                                    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={content} />
                                </Div>

                            </Div>

                        </Div>
                    </Div>
                    :
                    <p></p>
                }




                { editpane === true ?

                    <Div selectors={[styles.edit_container]} >
                        <Div selectors={[styles.edit_test]} >

                            <Div selectors={[styles.edit_wrapper]} >

                                <Div selectors={[styles.edit_title]}>
                                    <label>
                                        Title:
                                <input
                                            onChange={(event) => setTitle(event.target.value)}
                                            value={title}
                                        />
                                    </label>
                                </Div>

                                <Div selectors={[styles.edit_content]}>
                                    <textarea
                                        onChange={(event) => setContent(event.target.value)}
                                        value={content}
                                    />
                                </Div>

                            </Div>
                        </Div>

                    </Div>

                    :
                    <p></p>
                }

            </>
        );
    }


};



export default Editor;
