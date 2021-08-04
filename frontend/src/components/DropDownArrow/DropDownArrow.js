import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import NoteViewer from '../NoteViewer';




//css
import { styles } from '../DropDownArrow';


const DropDownArrow = ({ payload, closedImg, openedImg, title }) => {
  const [ clicked, setClicked ]= useState(false);
  const [ imgUrl, setImgUrl ] = useState(closedImg);
  const [ first, setFirst ] = useState(0);
  const [ second, setSecond ] = useState(false);


  const noteClickHandler = event => {
    event.preventDefault();

    if (first === 0) {
      // dispatch(mostRecentNotes(payload));
      setClicked(true);
      setImgUrl(openedImg);
      setFirst(1);
      setSecond(true);
    }

    if (second === true) {
      setClicked(false);
      setImgUrl(closedImg);
      setSecond(false);
      setFirst(0);
    }
  };



  return (
    <>
      <Div selectors={[styles.close_open_img]}>
        <img src={`${imgUrl}`} />
        <Link onClick={event => noteClickHandler(event)}> {title} </Link>
      </Div>

      <Div selectors={[]}>
        { clicked ? <NoteViewer the_content={payload} notebook_id={payload.id} /> : <></> }
      </Div>
    </>
  )
};

export default DropDownArrow;
