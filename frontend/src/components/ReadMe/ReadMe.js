import { useState, useEffect } from 'react';
import readme_text from './README.md';


// needed for parsing the markdown state item
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'





// thank you MDN for helping me :)
// https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
const ReadMe = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [markdown, setMarkdown] = useState('');


  useEffect(() => {

    fetch(`${readme_text}`)
      .then(response => response.body)
      .then(rb => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                // console.log(done, value);
                push();
              })
            }

            push();
          }
        });
      })
      .then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
          setIsLoaded(true);
          setMarkdown(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });

  }, []);





  if (error) {
    return(
      <>
        <div>Error: {error.message}</div>
      </>
    );

  } else if (!isLoaded) {
    return (
      <>
        <div>Loading...</div>
      </>
    );

  } else {
    return (
      <>
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </>
    );
  }


};



export default ReadMe;
