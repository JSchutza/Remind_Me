import { createContext, useContext, useState } from 'react';


const ModalContext = createContext();

const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}>

      {children}
    </ModalContext.Provider>
  );
};

// exports here:
export { useModal, ModalProvider };
