import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const RecentlyCreatedNotes = () => {
  const last_note = useSelector((store) => store.recentlyCreatedNoteReducer.note);


  if(last_note === null) {
    return (
      <>
      <h2>You have not created any notes recently</h2>
      </>
    );
  }

  return(
    <>
    <h1>Recently Created Notes</h1>
      <br/>

      <Link to={`/note/${last_note.id}`}>
        <h4>{last_note.title}</h4>
      </Link>
    </>
  );
}


export default RecentlyCreatedNotes;
