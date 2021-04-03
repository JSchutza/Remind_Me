
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
      <h3>{last_note.title}</h3>
    </>
  );
}


export default RecentlyCreatedNotes;
