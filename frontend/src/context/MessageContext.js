import { createContext, useContext, useState } from 'react';




const MessageContext = createContext();

const useMessage = () => useContext(MessageContext);


const MessageProvider = ({ children }) => {
  const [ message, setMessage ] = useState('');


  return (
    <MessageContext.Provider value={{
      message,
      setMessage

    }} >

      { children}
    </MessageContext.Provider>
  );
};




// exports here:
export {
  useMessage,
  MessageProvider,

};
