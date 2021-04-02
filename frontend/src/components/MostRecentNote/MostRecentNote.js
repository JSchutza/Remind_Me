import { useSelector } from 'react-redux';
import Div from '../Div';



const MostRecentNote = () => {
  const recentNotes = useSelector((store) => store.recentNoteReducer)

  // console.log(recentNotes);

  if (recentNotes === null) {
    return (
      <>
      <Div selectors={[]}>
      <h1>Most Recent Notes</h1>
      </Div>
      <Div selectors={[]}>
      <h3>You currently don't have any recent notes. </h3>
      </Div>
      </>
    );
  }


  if (recentNotes[1].id !== undefined || recentNotes[2].id !== undefined || recentNotes[3].id !== undefined || recentNotes[4].id !== undefined || recentNotes[5].id !== undefined) {
    return (
      <>
      <Div selectors={[]}>
      <h1>Most Recent Notes</h1>
      </Div>
      {Object.values(recentNotes).map(eachNote => {
        <>
        <Div selectors={[]}>
          <label>
            {eachNote.title}
          </label>
        </Div>
        <Div selectors={[]}>
          <label>
              {eachNote.due_date}
          </label>
        </Div>
        <Div selectors={[]}>
          <label>
              {eachNote.content}
          </label>
        </Div>
        <Div selectors={[]}>
          <label>
              {eachNote.createdAt}
          </label>
        </Div>
        </>
      })}
      </>
    );
  } else {
    return (
      <>
        <Div selectors={[]}>
          <h1>Most Recent Notes</h1>
        </Div>
        <Div selectors={[]}>
          <h3>You currently don't have any recent notes. </h3>
        </Div>
      </>
    );
  }


  // if (recentNotes[1]) {
  //   return (
  //     <>
  //     <Div selectors={[]}>
  //     <h1>Most Recent Notes</h1>
  //     </Div>

  //     <Div selectors={[]}>
  //       <label>
  //         {recentNotes[1].title}
  //       </label>
  //     </Div>

  //     <Div selectors={[]}>
  //       <label>
  //         {recentNotes[1].due_date}
  //       </label>
  //     </Div>

  //     <Div selectors={[]}>
  //       <label>
  //         {recentNotes[1].content}
  //       </label>
  //     </Div>

  //     <Div selectors={[]}>
  //       <label>
  //         {recentNotes[1].createdAt}
  //       </label>
  //     </Div>

  //     </>
  //   );

  // }










  // if (recentNotes[2]) {
  //   return (
  //     <>
  //       <Div selectors={[]}>
  //         <h1>Most Recent Notes</h1>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].createdAt}
  //         </label>
  //       </Div>

  //     </>
  //   );

  // }






  // if (recentNotes[3]) {
  //   return (
  //     <>
  //       <Div selectors={[]}>
  //         <h1>Most Recent Notes</h1>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].createdAt}
  //         </label>
  //       </Div>

  //     </>
  //   );

  // }






  // if (recentNotes[4]) {
  //   return (
  //     <>
  //       <Div selectors={[]}>
  //         <h1>Most Recent Notes</h1>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].createdAt}
  //         </label>
  //       </Div>
  //     </>
  //   );

  // }






  // if (recentNotes[5]) {
  //   return (
  //     <>
  //       <Div selectors={[]}>
  //         <h1>Most Recent Notes</h1>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[1].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[2].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[3].createdAt}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[4].createdAt}
  //         </label>
  //       </Div>
  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[5].title}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[5].due_date}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[5].content}
  //         </label>
  //       </Div>

  //       <Div selectors={[]}>
  //         <label>
  //           {recentNotes[5].createdAt}
  //         </label>
  //       </Div>
  //     </>
  //   );

  // }





};



export default MostRecentNote;
