import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';



const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(thunk_getSpecificNote(notebookId));
  },[dispatch]);


  return (
    <>
      <h1>Individual Notebook Page</h1>

    </>
  );
};




export default NotebookPage;
