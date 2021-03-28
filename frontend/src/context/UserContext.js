import { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunk_checkIfThereIsAUser } from '../thunks/session.js';


const UserContext = createContext();

const useUser = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const dispatch = useDispatch();
    const the_user = useSelector((store) => store.userReducer.user);


    useEffect(() => {
        dispatch(thunk_checkIfThereIsAUser());
    }, [dispatch]);


    return (
        <UserContext.Provider   value={ { the_user } } >
            { children }
        </UserContext.Provider>
    );
};




// exports here:
export {
    useUser,
    UserProvider,

};
