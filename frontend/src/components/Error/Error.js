


import styles from "./error.module.css";



const Error = ({ error }) => {


  return (
    <>
      <div>
        {error.map(eachError => (
          <li> {eachError}</li>
        ))}
      </div>
    </>
  )
};




export default Error;
