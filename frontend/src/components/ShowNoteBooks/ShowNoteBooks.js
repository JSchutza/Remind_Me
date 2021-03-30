import { useDispatch } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { useState, useEffect } from 'react';
import { thunk_getNoteBooks } from '../../thunks/notebooks.js';


const ShowNoteBooks = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();

  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  }, [dispatch]);

  return (
    <>
      <h1>Your Notebooks</h1>
    </>
  );
};




export default ShowNoteBooks;
