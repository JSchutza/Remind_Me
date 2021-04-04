import { useState, useEffect } from 'react';
import Div from '../Div';
import Editor from '../Editor';




const NoteViewer = ({ the_content, notebook_id }) => {
  return (
    <>
      <Editor the_content={the_content} notebook_id={notebook_id} />
    </>
  );

};


export default NoteViewer;
