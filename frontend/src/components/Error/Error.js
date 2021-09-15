
import { nanoid } from 'nanoid';

import styles from "./error.module.css";



const Error = ({ error }) => {


  return (
    <>
      <div className={styles.errors_wrap}>
        {error.map(eachError => (
          <li key={nanoid()} > {eachError}</li>
        ))}
      </div>
    </>
  )
};




export default Error;
