
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



import Div from '../Div';
import EditUser from '../EditUser';
import TagCreator from '../TagCreator';
import ShowNoteBooks from '../ShowNoteBooks';
import MostRecentNote from '../MostRecentNote';
import RecentlyCreatedNotes from '../RecentlyCreatedNotes';

//css
import { styles } from '../Profile';




const Profile = () => {
    // state here

    const user_info = useSelector((store) => store.userReducer.user);
    // const dispatch = useDispatch();
    const failedLogin = useSelector((store) => store.userReducer.err);

    // successful user loginin
    if (user_info && failedLogin === undefined) {
        return (
            <>

                <Div selectors={[styles.edituser_containter]}>
                    <EditUser current_info={user_info} />
                </Div>


                <Div selectors={[styles.main_div]}>
                    <ShowNoteBooks limit={true}/>
                </Div>


                <div className={styles.recentnote_container}>
                    <MostRecentNote />
                    <RecentlyCreatedNotes />
                </div>

            </>
        );
    }


    return (
        <>
        <h1>Failed Login</h1>
        </>
    );




};








export default Profile;
