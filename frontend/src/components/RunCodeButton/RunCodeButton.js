

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { thunk_getCode } from "../../thunks/code.js";
import { useEditor } from "../../context/EditorContext.js";


import styles from './runcodebutton.module.css';



const RunCodeButton = ({ script, setCompModal }) => {
  const dispatch = useDispatch();
  const { language } = useEditor();
  const langs = [ 'javascript', 'python', 'c++', 'php', 'c#', 'java', 'vb', 'coffeescript', 'batch', 'f#', 'lua', 'ruby', 'r', 'rust', ];
  const allowedLangs = new Set(langs);

  const handleClick = async (event) => {
    event.preventDefault();
    // if success is true show the result in a modal
    const success = await dispatch(thunk_getCode({ language, script }));
    if (success) {
      // showModal call here?
      setCompModal(true)
      return;
    }

    // show error in Modal here?
  };


  if(!allowedLangs.has(language)) {   // if it is not a language that can be used in the api
    return null;
  }


  return (
    <div className={styles.runcode_wrap} onClick={handleClick} >
      <div className={styles.run_div} >
        <Link to='/' onClick={handleClick} > Run </Link>
      </div>
    </div>
  );
};



export default RunCodeButton;
