import { useState, useEffect } from 'react';





const NoteViewer = ({ the_content }) => {
  // state here
  const [ title, setTitle ] = useState(the_content.title);
  const [ content, setContent ] = useState(the_content.content);

  return (
    <>
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>


    <div>
      <label>
        Title:
        <input
          onChange={ (event) => setTitle(event.target.value)}
          value={title}
        />
        </label>

        <textarea
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
    </div>
    </>
  );
};


export default NoteViewer;
