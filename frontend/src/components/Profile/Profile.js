
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



import Div from '../Div';
import EditUser from '../EditUser';
import TagCreator from '../TagCreator';
import ShowNoteBooks from '../ShowNoteBooks';
import MostRecentNote from '../MostRecentNote';


//css
import { styles } from '../Profile';




const Profile = () => {
    // state here

    const user_info = useSelector((store) => store.userReducer.user);
    // const dispatch = useDispatch();


    return (
        <>

            <Div selectors={[styles.edituser_containter]}>
                <EditUser current_info={user_info} />

            </Div>

            <Div selectors={[styles.main_div]}>
                <ShowNoteBooks />
            </Div>


            <Div selectors={[styles.recentnote_container]}>
                <MostRecentNote />
            </Div>

        </>
    );
};








export default Profile;
