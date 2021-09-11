
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VscJson, VscChromeMinimize, VscListOrdered } from "react-icons/vsc";


import { styles } from "../Editor";


const EditorNav = ({ content, setContent, freshEditor=false }) => {
  const [ error, setError ] = useState([]);
  const errors = useSelector(store => store.errorReducer.errors);



  useEffect(() => {
    if (errors !== null) {
      setError(errors);
    }
   }, [errors]);





  const insertHOne = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '# ');
    } else {
      setContent(content + '\n# ');
    }
  };


  const insertHTwo = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '## ');
    } else {
      setContent(content + '\n## ');
    }
  }


  const insertHThree = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '### ');
    } else {
      setContent(content + '\n### ');
    }
  }


  const insertCodeBlock = event => {
    event.preventDefault();
    if (content === undefined){
      setContent('' + '~~~\nEnter code here\n~~~');
    } else {
      setContent(content + '\n~~~\nEnter code here\n~~~');
    }
  }


  const insertLine = event => {
    event.preventDefault();
    if (content === undefined){
      setContent('' + '-----\n');
    } else {
      setContent(content + '\n-----\n');
    }
  }


  const insertBulletpoint = event => {
    event.preventDefault();
    if(content === undefined) {
      setContent('' + '* \n- ');
    } else {
      setContent(content + '\n* \n- ');
    }
  }



  return (
    <>
      <div className={styles.nav_containter}>
        <nav>
          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertHOne(event)}> {'<h1>'} </Link> </li>
          </div>

          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertHTwo(event)}> {'<h2>'} </Link> </li>
          </div>

          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertHThree(event)}> {'<h3>'} </Link> </li>
          </div>

          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertCodeBlock(event)}> <VscJson /> </Link> </li>
          </div>

          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertLine(event)}> <VscChromeMinimize /> </Link> </li>
          </div>

          <div className={styles.each_li_div} >
            <li> <Link to={'/'} onClick={event => insertBulletpoint(event)}> <VscListOrdered /> </Link> </li>
          </div>
        </nav>
      </div>


      {freshEditor ?
        <div>
          <div>
            {error.map(eachError => (
              <li> {eachError}</li>
            ))}
          </div>
        </div>
        :
          <></>
        }


    </>
  )

};

export default EditorNav;
