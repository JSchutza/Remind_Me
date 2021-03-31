import { useState, useEffect } from 'react';
import Div from '../Div';
import Editor from '../Editor';




const NoteViewer = ({ the_content }) => {
  return (
    <>
      <Editor the_content={the_content} />
    </>
  );

};


export default NoteViewer;
