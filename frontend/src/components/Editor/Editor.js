import { useState, useEffect } from 'react';
import Div from '../Div';

// css
import { styles } from '../Editor';










const Editor = ({ the_content = 'none' }) => {
    // state here
    const [title, setTitle] = useState(the_content.title);
    const [content, setContent] = useState(the_content.content);
    const [showPreview, setShowPreview] = useState(false);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(false);




    useEffect(() => {

    }, [title, content, showPreview]);





const previewClickHandler = (event) => {
    event.preventDefault();
    if (first === 0) {
        setShowPreview(true);
        setFirst(1);
        setSecond(true);
    }

    if (second === true) {
        setShowPreview(false);
        setSecond(false);
        setFirst(0);
    }

};



    if (the_content === 'none') {
        return (
            <>
                <Div selectors={[styles.preview_button]} >
                    <a
                        onClick={(event) => previewClickHandler(event)}
                    >
                        <h1>Preview</h1>
                    </a>
                </Div>


                {showPreview === true ?
                    <Div selectors={[styles.preview_test]}>
                    <Div selectors={[styles.preview_container]}>
                        <Div selectors={[styles.preview_wrapper]} >
                            <Div selectors={[styles.preview_title]} >
                                <h1>{title}</h1>
                            </Div>

                            <Div selectors={[styles.preview_content]} >
                                <p>{content}</p>
                            </Div>

                        </Div>

                    </Div>
                    </Div>
                    :
                    <p></p>
                }





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

            </>
        );
    }


return (
    <>
        <Div selectors={[styles.preview_button]} >
            <a
                onClick={(event) => previewClickHandler(event)}
            >
                <h1>Preview</h1>
            </a>
        </Div>


        {showPreview === true ?
            <Div selectors={[styles.preview_test]}>
            <Div selectors={[styles.preview_container]}>
                <Div selectors={[styles.preview_wrapper]} >
                    <Div selectors={[styles.preview_title]} >
                        <h1>{title}</h1>
                    </Div>

                    <Div selectors={[styles.preview_content]} >
                        <p>{content}</p>
                    </Div>

                </Div>

            </Div>
            </Div>
            :
            <p></p>
        }





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
    </>
    );



};



export default Editor;
