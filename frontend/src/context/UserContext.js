import { createContext, useState, useContext } from 'react';



const UserContext = createContext();

const useUser = () => useContext(UserContext);



const UserProvider = ({ children }) => {
    const [ isUser, setIsUser ] = useState(null);


    return (
        <UserContext.Provider   value={ { isUser, setIsUser } } >
            { children }
        </UserContext.Provider>
    );
};




// exports here:
export {
    useUser,
    UserProvider,

};
