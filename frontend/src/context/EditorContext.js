import { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

import React from 'react';
import styles from './editor.module.css';
import {map} from "./editorConfig";

const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');
  const [ theme, setTheme ] = useState('vs-dark');
  const [ script, setScript ] = useState('');




  const EachEditor = ({ title='scratch.js',  content, handleEditorChange }) => {

    const fileExtension = map[language]?.filename;
    const selectList = Object.values(map);
    const [ lang, setLang ] = useState(language);
    const [ options, setOptions ] = useState(false);
    const [ tabtitle, setTabTitle ] = useState(title);
    const [ fileType, setFileType ] = useState(map[language] ? map[language].type : 'Text');
    const [ support, setSupport ] = useState(map[language] ? map[language].support : false);



    useEffect(() => {
      const toArr = title.split(' ');

      if (!title.length || !tabtitle.length) {
        setTabTitle('scratch' + fileExtension);
        return;
      }

      setTabTitle(toArr.join('_') + fileExtension);
    },[title]);



    const handleSubmit = event => {
      event.preventDefault();
      if (map[lang]) {
        setLanguage(lang);
        return;
      } else {
        // set state to show error message?
      }
    };



    const handleChange = event => {
      setOptions(true);
      setLang(event.target.value.toLowerCase());
    }


    const selectOption = (event, opInstance) => {
      event.preventDefault();
      setLanguage(opInstance.option);
    }


    return (
      <>
        <div className={styles.editor_input_wrap}>
          <form onSubmit={handleSubmit}>
            <input type='text' value={lang} onChange={handleChange} />
            <button> Select Language </button>
          </form>
        </div>

        {options ? (
          <div className={styles.editor_options_wrap}>
            {selectList.map((eachOption) => (
              <div
                className={styles.editor_each_option}
                onClick={(event) => selectOption(event, eachOption)}
              >
                <Link
                  to='/'
                  onClick={(event) => selectOption(event, eachOption)}
                >
                  <li> {eachOption.type} </li>
                </Link>
              </div>
            ))}
          </div>
        ) : null}

        <div>
          <h5> {fileType} </h5>
        </div>

        <div className={styles.editor_tab} >
          <p> {tabtitle} </p>
        </div>

        <Editor
          height='90vh'
          defaultLanguage={language}
          value={content}
          onChange={handleEditorChange}
          theme={theme}
        />

        <div className={support ? 'on' : 'off'}>
          {support ? 'IntelliSense support: on' : 'IntelliSense support: off'}
        </div>
      </>
    );
  };






  return (
    <EditorContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        script,
        setScript,
        EachEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );



};



// exports here:
export { useEditor, EditorProvider };
