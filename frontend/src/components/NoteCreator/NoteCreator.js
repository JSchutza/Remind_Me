import { useState, useEffect } from 'react';
import Editor from '../Editor';






const NoteCreator = ({ the_content, first_creation = true }) => {
  return (
    <>
      <Editor the_content={the_content} first_creation={first_creation} />
    </>

  )
};


export default NoteCreator;
