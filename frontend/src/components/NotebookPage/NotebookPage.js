import { useParams } from 'react-router-dom';





const NotebookPage = () => {
  const { notebookId } = useParams();


  return (
    <>
      <h1>Individual Notebook Page</h1>

    </>
  );
};




export default NotebookPage;
