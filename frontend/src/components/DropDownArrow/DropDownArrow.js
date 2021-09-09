

import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";


import Editor from "../Editor";


import styles from './dropdownarrow.module.css';



const DropDownArrow = ({ eachNote, notebookId }) => {
  const [ open, setOpen ] = useState(false);


  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };




  return (
    <>
      {open ?
        <>
          <div
            className={styles.notetitle_wrap}
            onClick={ () => handleClose() }>
                <VscChevronDown />
                <p>{eachNote.title}</p>
          </div>

          <Editor the_content={eachNote} notebook_id={notebookId}/>
        </>
        :
        <>
          <div
            className={styles.notetitle_wrap}
            onClick={ () => handleOpen() }>
                <VscChevronRight />
                <p>{eachNote.title}</p>
          </div>

        </>
      }
    </>
  )

};


export default DropDownArrow;
