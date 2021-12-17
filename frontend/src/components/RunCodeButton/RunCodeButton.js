

import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { thunk_getCode } from "../../thunks/code.js";

import styles from './runcodebutton.module.css';



const RunCodeButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleClick = async event => {
    event.preventDefault();
    
    // if success is true show the result in a modal
    const success = await dispatch(thunk_getCode());
  }


  return (
    <>

    </>
  )
};



export default RunCodeButton;
