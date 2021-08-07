

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



import { thunk_getNoteBooks } from "../../thunks/notebooks.js";
import { useUser } from "../../context/UserContext.js";

import DeleteNotebook from "../DeleteNotebook";
import UpdateNotebook from "../UpdateNotebook";




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
                <Link to={`/notebook/${eachNotebook.id}`} >
                  <h3>{eachNotebook.name}</h3>
                </Link>
                {/* update and delete notebook components here */}
                <DeleteNotebook notebookId={eachNotebook.id} />
                <UpdateNotebook notebookId={eachNotebook.id} />
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
