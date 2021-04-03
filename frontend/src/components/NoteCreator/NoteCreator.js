import { useState, useEffect } from 'react';
import Editor from '../Editor';






const NoteCreator = ({ the_content, first_creation = true, notebook_id }) => {
  return (
    <>
      <Editor
        the_content={the_content}
        first_creation={first_creation}
        notebook_id={notebook_id}
      />
    </>

  )
};


export default NoteCreator;
