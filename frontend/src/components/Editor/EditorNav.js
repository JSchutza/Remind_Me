
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ReactModal from 'react-modal';

// import { VscJson, VscChromeMinimize, VscListOrdered } from "react-icons/vsc";

import { useEditor } from '../../context/EditorContext.js';
import { resetCode } from '../../actions/code.js';
import Error from "../Error";
import RunCodeButton from "../RunCodeButton";
import CodeResults from "../CodeResults";

import { styles } from "../Editor";


const EditorNav = ({ content, setContent, freshEditor=false }) => {
  const [ compModal, setCompModal ] = useState(false);
  const { setLanguage, theme, setTheme } = useEditor();
  const dispatch = useDispatch();




   const setJSSyntax = event => {
    event.preventDefault();
    setLanguage('javascript');
  }


  const setPYSyntax = event => {
    event.preventDefault();
    setLanguage('python');
   }



   const setMDSyntax = event => {
     event.preventDefault();
     setLanguage('markdown');
   }



   const setTSSyntax = event => {
     event.preventDefault();
     setLanguage('typescript');
   }



   const setCSyntax = event => {
     event.preventDefault();
     setLanguage('c');
   }



   const setHTMLSyntax = event => {
     event.preventDefault();
     setLanguage('html');
   }



   const changeTheme = event => {
     event.preventDefault();
     if (theme === 'vs-light') setTheme('vs-dark');
     if (theme === 'vs-dark') setTheme('vs-light');
   }



   const closeCompModal = () => {
     setCompModal(false);
     // clear compilation results in redux
      dispatch(resetCode());
   }



  return (
    <>
      <div className={styles.nav_containter}>
        <nav>
          <div className={styles.each_li_div} onClick={setJSSyntax}>
            <li key={nanoid()}>
              <Link to='/' onClick={setJSSyntax} className={styles.change_lang}>
                JS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={setPYSyntax}>
            <li key={nanoid()}>
              <Link to='/' onClick={setPYSyntax} className={styles.change_lang}>
                PY
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={setMDSyntax}>
            <li key={nanoid()}>
              <Link to='/' onClick={setMDSyntax} className={styles.change_lang}>
                MD
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={setTSSyntax}>
            <li key={nanoid()}>
              <Link to='/' onClick={setTSSyntax} className={styles.change_lang}>
                TS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={setCSyntax}>
            <li key={nanoid()}>
              <Link to='/' onClick={setCSyntax} className={styles.change_lang}>
                C++
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={setHTMLSyntax}>
            <li key={nanoid()}>
              <Link
                to='/'
                onClick={setHTMLSyntax}
                className={styles.change_lang}
              >
                HTML
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div} onClick={changeTheme}>
            <li key={nanoid()}>
              <Link to='/' onClick={changeTheme} className={styles.change_lang}>
                {theme}
              </Link>
            </li>
          </div>
        </nav>
      </div>


      <RunCodeButton
        script={content}
        setCompModal={setCompModal}
      />



      <ReactModal
        isOpen={compModal}
        onRequestClose={closeCompModal}
        appElement={document.getElementById('root')}
      >
        <CodeResults />
      </ReactModal>





      {freshEditor ? (
        <div className={styles.edit_errors}>
          <Error />
        </div>
      ) : null}
    </>
  );

};

export default EditorNav;
