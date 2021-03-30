import { useParams } from 'react-router-dom';



// make a thunk to  http://localhost:5000/api/notes/notebookId

const NotebookPage = () => {
  const { notebookId } = useParams();


  return (
    <>
      <h1>Individual Notebook Page</h1>

    </>
  );
};




export default NotebookPage;
