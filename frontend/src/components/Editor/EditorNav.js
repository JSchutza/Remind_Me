
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

// import { VscJson, VscChromeMinimize, VscListOrdered } from "react-icons/vsc";

import { useEditor } from '../../context/EditorContext.js';
import Error from "../Error";

import { styles } from "../Editor";


const EditorNav = ({ content, setContent, freshEditor=false }) => {
  const [ error, setError ] = useState([]);
  const { setLanguage, setLangType, theme, setTheme } = useEditor();
  const errors = useSelector(store => store.errorReducer.errors);



  useEffect(() => {
    if (errors !== null) {
      setError(errors);
    }
   }, [errors]);



   const setJSSyntax = event => {
    event.preventDefault();
    setLanguage('javascript');
    setLangType("// JavaScript Code Here")
  }


  const setPYSyntax = event => {
    event.preventDefault();
    setLanguage('python');
    setLangType('# Python Code Here');
   }



   const setMDSyntax = event => {
     event.preventDefault();
     setLanguage('markdown');
     setLangType('<!-- Markdown Code Here -->');
   }



   const setTSSyntax = event => {
     event.preventDefault();
     setLanguage('typescript');
     setLangType('// TypeScript Code Here ');
   }



   const setCSyntax = event => {
     event.preventDefault();
     setLanguage('c');
     setLangType('// C++ Code Here ');
   }



   const setHTMLSyntax = event => {
     event.preventDefault();
     setLanguage('html');
     setLangType('<!-- HTML Code Here -->');
   }



   const changeTheme = event => {
     event.preventDefault();
     if (theme === 'vs-light') setTheme('vs-dark');
     if (theme === 'vs-dark') setTheme('vs-light');
   }


  return (
    <>
      <div className={styles.nav_containter}>
        <nav>
          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setJSSyntax}>
                JS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setPYSyntax}>
                PY
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setMDSyntax}>
                MD
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setTSSyntax}>
                TS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setCSyntax}>
                C++
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={setHTMLSyntax}>
                HTML
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to='/' onClick={changeTheme}>
                {theme}
              </Link>
            </li>
          </div>
        </nav>
      </div>

      {freshEditor ? (
        <div className={styles.edit_errors}>
          <Error error={error} />
        </div>
      ) : null}
    </>
  );

};

export default EditorNav;
