import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { clearError } from '../../actions/error.js';
import React from 'react';
import styles from "./error.module.css";



const Error = () => {
  const errors = useSelector((store) => store.errorReducer.errors);
  const dispatch = useDispatch();


  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(clearError());
    }, 5000);


    return () => {
      clearTimeout(time);
    };
  }, [errors]);




   if (!errors) return null;


    return (
      <>
        <div className={styles.errors_wrap}>
          {errors.map((eachError) => (
            <li key={nanoid()}> {eachError}</li>
          ))}
        </div>
      </>
    );
};




export default Error;
