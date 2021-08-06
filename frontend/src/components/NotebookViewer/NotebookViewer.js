
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";


import { thunk_notebookForPage } from '../../thunks/notebooks.js';




const NotebookViewer = () => {
  const [ onrefresh, setOnRefresh ] = useState(false);
  const { notebookId } = useParams();
  const notebook = useSelector(store => store.notebooksReducer.notebooks);
  const re_notebook = useSelector(store => store.notebookPageReducer?.notebook);
  const dispatch = useDispatch();



  useEffect(() => {
    if(notebook?.[notebookId] === undefined) {
      dispatch(thunk_notebookForPage(notebookId));
      setOnRefresh(true);
    }
  },[]);



  return (
    <>
      <h1>Notebook</h1>
      {/* if the user refresh page */}
      <div>
        {onrefresh && re_notebook !== null ?
          <>
          <h3>{re_notebook.name}</h3>
          </>
        :
        <>
            <h3>{notebook?.[notebookId].name}</h3>
        </>
        }
      </div>

    </>
  )
};



export default NotebookViewer;
