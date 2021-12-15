
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VscJson, VscChromeMinimize, VscListOrdered } from "react-icons/vsc";

import { nanoid } from 'nanoid';
import Error from "../Error";
import { styles } from "../Editor";



const EditorNav = ({ content, setContent, freshEditor=false }) => {
  const [ error, setError ] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);



  useEffect(() => {
    if (errors !== null) {
      setError(errors);
    }
   }, [errors]);






  return (
    <>
      <div className={styles.nav_containter}>
        <nav>
          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                JS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                PY
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                MD
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                TS
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                C++
              </Link>
            </li>
          </div>

          <div className={styles.each_li_div}>
            <li key={nanoid()}>
              <Link to={'/'} onClick={(event) => event.preventDefault()}>
                HTML
              </Link>
            </li>
          </div>
        </nav>
      </div>



      {freshEditor ? (
        <div className={styles.edit_errors}>
          <Error error={error} />
        </div>
      ) : (
        <></>
      )}
    </>
  );

};

export default EditorNav;
