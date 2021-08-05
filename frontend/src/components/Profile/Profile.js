
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';




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

                <div className={styles.edituser_containter}>
                    {/* <EditUser current_info={user_info} /> */}
                </div>


                <div className={styles.main_div}>
                    {/* <ShowNoteBooks limit={true}/> */}
                </div>


                <div className={styles.recentnote_container}>
                    {/* <MostRecentNote /> */}
                    {/* <RecentlyCreatedNotes /> */}
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
