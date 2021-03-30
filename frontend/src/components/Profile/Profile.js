
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ShowNoteBooks from '../ShowNoteBooks';
import MostRecentNote from '../MostRecentNote';

const Profile = () => {
    // state here

    // const user_info = useSelector((store) => store.userReducer.user);
    const dispatch = useDispatch();



    return (
        <>
            <h1>Their Profile</h1>
            {/* EditUser component -- shows a drop down side bar thingy that alows a user to edit their info */}

            {/* TagCreator */}
                {/*  component that shows / allows users to make / view tags */}
                    {/*  they will have to on the created notebook assign the tag there */}
                        {/*  add tag button will show a drop down selection of their currently created tags */}



            {/* ShowNoteBooks  */}
                {/* component that shows all of the users created notebooks ordered from most recent creation date */}
            <ShowNoteBooks />


            {/* MostRecentNote  */}
                {/* component that shows the users last worked on / or created note */}
                    {/* each note when clicked will go to that individual note */}
            <MostRecentNote />
        </>
    );
};








export default Profile;
