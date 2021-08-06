

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { thunk_getNoteBooks } from "../../thunks/notebooks.js";
import { useUser } from "../../context/UserContext.js";


const NotebooksPage = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const notebooks = useSelector(store => store.notebooksReducer.notebooks);



  useEffect(() => {
    dispatch(thunk_getNoteBooks(isUser.id));
  },[]);





  return (
    <>
      <h1>Notebooks</h1>
      <div>
        {notebooks !== null ?
          <>
            {Object.values(notebooks).map(eachNotebook => (
              <>
                <h3>{eachNotebook.name}</h3>
              </>
            ))}
          </>
        :
          <></>
        }
    </div>
      </>
  )
};

export default NotebooksPage;
