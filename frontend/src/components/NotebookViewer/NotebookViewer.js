
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";


import { thunk_notebookForPage } from '../../thunks/notebooks.js';
import { thunk_getSpecificNote } from "../../thunks/notes.js";


import DropDownArrow from "../DropDownArrow";



const NotebookViewer = () => {
  const [ onrefresh, setOnRefresh ] = useState(false);
  const { notebookId } = useParams();
  const notebook = useSelector(store => store.notebooksReducer.notebooks);
  const re_notebook = useSelector(store => store.notebookPageReducer?.notebook);
  const allNotes = useSelector(store => store.notesReducer.notes);
  const dispatch = useDispatch();



  useEffect(() => {
    if(notebook?.[notebookId] === undefined) {
      dispatch(thunk_notebookForPage(notebookId));
      setOnRefresh(true);
    }

    dispatch(thunk_getSpecificNote(notebookId));
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


      <div>
        <h1>Notes</h1>

        {allNotes !== null ?
          <>
            {Object.values(allNotes).map(eachNote => (
              <>
                <DropDownArrow eachNote={eachNote} notebookId={notebookId} />
              </>
            ))}
          </>
        :
        <h3>There are no notes for this Notebook</h3>
        }
      </div>

    </>
  )
};



export default NotebookViewer;
