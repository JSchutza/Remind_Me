

import { useState } from 'react';
import { VscChevronRight } from "react-icons/vsc";
import ReactModal from 'react-modal';


import { CodeEditor } from '../Editor';


import styles from './dropdownarrow.module.css';



const DropDownArrow = ({ eachNote, notebookId }) => {
  const [ openModal, setOpenModal ] = useState(false);


  const closeModal = () => {
    setOpenModal(false);
  }



  return (
    <>
      <div className={styles.notetitle_wrap} onClick={() => setOpenModal(true)}>
        <VscChevronRight />
        <p>{eachNote.title}</p>
      </div>

      <ReactModal
        isOpen={openModal}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
      >
        <CodeEditor the_content={eachNote} notebook_id={notebookId} />
      </ReactModal>
    </>
  );

};


export default DropDownArrow;
