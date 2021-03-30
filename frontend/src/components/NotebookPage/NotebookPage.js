import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getSpecificNote } from '../../thunks/notes.js';



const NotebookPage = () => {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const notebook_info = useSelector((store) => store.notebookPageReducer.notebook)


  useEffect(() => {
    dispatch(thunk_getSpecificNote(notebookId));
  },[dispatch]);



  if(notebook_info === null) {
    return null;
  }


  return (
    <>
      <h1>Individual Notebook Page</h1>
      <p>{notebook_info.name}</p>
    </>
  );
};




export default NotebookPage;
