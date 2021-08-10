
// import { useState } from 'react';
import { Link } from 'react-router-dom';





const EditorNav = ({ content, setContent }) => {


  const insertHOne = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '# ');
    } else {
      setContent(content + '\n# ');
    }
  };


  const insertHTwo = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '## ');
    } else {
      setContent(content + '\n## ');
    }
  }


  const insertHThree = event => {
    event.preventDefault();
    if (content === undefined) {
      setContent('' + '### ');
    } else {
      setContent(content + '\n### ');
    }
  }


  const insertCodeBlock = event => {
    event.preventDefault();
    if (content === undefined){
      setContent('' + '~~~\nEnter code here\n~~~');
    } else {
      setContent(content + '\n~~~\nEnter code here\n~~~');
    }
  }


  const instertLine = event => {
    event.preventDefault();
    if (content === undefined){
      setContent('' + '-----\n');
    } else {
      setContent(content + '\n-----\n');
    }
  }



  return (
    <>
      <div>

        <div>
          <Link to={'/'} onClick={event => insertHOne(event)}> h1 </Link>
        </div>

        <div>
          <Link to={'/'} onClick={event => insertHTwo(event)}> h2 </Link>
        </div>

        <div>
          <Link to={'/'} onClick={event => insertHThree(event)}> h3 </Link>
        </div>

        <div>
          <Link to={'/'} onClick={event => insertCodeBlock(event)}> Code </Link>
        </div>

        <div>
          <Link to={'/'} onClick={event => instertLine(event)}> Line </Link>
        </div>


      </div>
    </>
  )

};

export default EditorNav;
