import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { useState, useEffect } from 'react';
import { thunk_getNoteBooks } from '../../thunks/notebooks.js';
import { notebookForPage } from '../../actions/notebooks.js';





const ShowNoteBooks = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const notebooks = useSelector((store) => store.notebooksReducer.notebooks );


  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  }, [dispatch]);

  const notebookHandler = (notebook) => {
    dispatch(notebookForPage(notebook));
  }


  if(notebooks === null) {
    return (
      <>
      <h1>Your Notebooks</h1>
        <h3>You currently do not have any notebooks</h3>
      </>
    );
  }


  return (
    <>
      <h1>Your Notebooks</h1>
      <ul>
      {Object.values(notebooks).map(eachNote => (
        <NavLink
          key={eachNote.id}
          to={`/notebook/${eachNote.id}`}
          onClick={notebookHandler({
            id: eachNote.id,
            name: eachNote.name,
            description: eachNote.description,
            createdAt: eachNote.createdAt
          })}

        > {eachNote.name} </NavLink>
      ))}
      </ul>
    </>
  );

};




export default ShowNoteBooks;
