
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import EditUser from '../EditUser';
import TagCreator from '../TagCreator';
import ShowNoteBooks from '../ShowNoteBooks';
import MostRecentNote from '../MostRecentNote';







const Profile = () => {
    // state here

    // const user_info = useSelector((store) => store.userReducer.user);
    const dispatch = useDispatch();



    return (
        <>
            <h1>Their Profile</h1>

            <EditUser />

            <TagCreator />

            <ShowNoteBooks />

            <MostRecentNote />
        </>
    );
};








export default Profile;
