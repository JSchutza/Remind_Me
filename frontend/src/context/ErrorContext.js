import { createContext, useContext, useState } from 'react';




const ErrorContext = createContext();

const useError = () => useContext(ErrorContext);


const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);


  return (
    <ErrorContext.Provider value={{
      errors,
      setErrors

    }} >

      { children}
    </ErrorContext.Provider>
  );
};




// exports here:
export {
  useError,
  ErrorProvider,

};
