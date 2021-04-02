import { useSelector } from 'react-redux';
import Div from '../Div';
import { Link } from 'react-router-dom';



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


  if (Object.values(recentNotes).length > 0) {

    return (
      <>
      <Div selectors={[]}>
      <h1>Most Recent Notes</h1>
      </Div>

        {recentNotes[1] ?
        <>
        <Div selectors={[]}>
            <Link to=''> {recentNotes[1].title} </Link>
        </Div>

        <Div selectors={[]}>
          <label>
            Due:
          </label>
              {recentNotes[1].due_date}
        </Div>

        </>
        :
        <div></div>
        }


        {recentNotes[2] ?
        <>
        <Div selectors={[]}>
            <Link to=''> {recentNotes[2].title} </Link>
        </Div>

        <Div selectors={[]}>
          <label>
            Due:
          </label>
              {recentNotes[2].due_date}
        </Div>

        </>
        :
        <div></div>
        }


        {recentNotes[3] ?
        <>
        <Div selectors={[]}>
            <Link to=''> {recentNotes[3].title} </Link>
        </Div>

        <Div selectors={[]}>
          <label>
            Due:
          </label>
              {recentNotes[3].due_date}
        </Div>

        </>
        :
        <div></div>
        }


        {recentNotes[4] ?
        <>
        <Div selectors={[]}>
            <Link to=''> {recentNotes[4].title} </Link>
        </Div>

        <Div selectors={[]}>
          <label>
            Due:
          </label>
              {recentNotes[4].due_date}
        </Div>

        </>
        :
        <div></div>
        }



        {recentNotes[5] ?
        <>
        <Div selectors={[]}>
            <Link to=''> {recentNotes[5].title} </Link>
        </Div>

        <Div selectors={[]}>
          <label>
            Due:
          </label>
              {recentNotes[5].due_date}
        </Div>

        </>
        :
        <div></div>
        }


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


};



export default MostRecentNote;
