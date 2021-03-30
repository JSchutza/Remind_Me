import { useState, useEffect } from 'react';





const NoteViewer = ({ the_content }) => {


  return (
    <>
    <h1>Individual Note</h1>
      <p>{the_content.title}</p>
    </>
  );
};


export default NoteViewer;
