
// import { useState } from 'react';
import { Link } from 'react-router-dom';





const EditorNav = ({ content, setContent }) => {


  const handleHOne = event => {
    event.preventDefault();

    if(content === undefined) {
      setContent('' + '# ')
    } else {
      setContent(content + '# ')
    }

  }



  return (
    <>
      <div>

        <div>
          <Link to={'/'} onClick={event => handleHOne(event)}> h1 </Link>
        </div>

      </div>
    </>
  )

};

export default EditorNav;
