


import styles from "./error.module.css";



const Error = ({ error }) => {


  return (
    <>
      <div className={styles.errors_wrap}>
        {error.map(eachError => (
          <li> {eachError}</li>
        ))}
      </div>
    </>
  )
};




export default Error;
