

import { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";


import Editor from "../Editor";




const DropDownArrow = ({ eachNote, notebookId }) => {
  const [ open, setOpen ] = useState(false);


  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };




  return (
    <>
      {open ?
        <>
          <div onClick={ () => handleClose() }>
            <VscChevronDown />
              <p>{eachNote.title}</p>
          </div>

          <Editor the_content={eachNote} notebook_id={notebookId}/>
        </>
        :
        <>
          <div onClick={ () => handleOpen() }>
            <VscChevronRight />
              <p>{eachNote.title}</p>
          </div>

        </>
      }
    </>
  )

};


export default DropDownArrow;
