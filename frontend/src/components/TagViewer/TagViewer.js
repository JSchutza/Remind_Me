import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunk_getUsersTags } from '../../thunks/tags.js';
import { useUser } from '../../context/UserContext.js';
import { useSelector } from 'react-redux';





const TagViewer = () => {
  const dispatch = useDispatch();
  const { isUser } = useUser();
  const [ isLoaded, setIsLoaded ] = useState(false);
  const allTags = useSelector((store) => store.tagsReducer.their_tags);



  useEffect(() => {
    dispatch(thunk_getUsersTags(isUser.id))
    .then(() => setIsLoaded(true))
  }, [isLoaded]);


  let length = [];

  if (isLoaded && allTags !== null) {
    length = Object.keys(allTags);
  }

  if (isLoaded) {
    return (
      <>
      <h1>Current Tags</h1>
        {length.map(eachTag => (
          <li key={eachTag}> {allTags[eachTag].name} </li>
        ))}
      </>
    );
  } else {
    return (
      <>
      <h1>Searching for your tags, one moment please...</h1>
      </>
    );
  }

};



export default TagViewer;
