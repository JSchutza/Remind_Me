import { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';





// import styles
import { styles } from '../Footer';
import profile_photo from './profile_pic.jpg';




function Footer() {
    const history = useHistory();


    const footerClickHandler = event => {
        event.preventDefault();
        history.push('/about');
    }


    return (
        <>
        <div className={styles.footer_wrap}>
            <div className={styles.footer_container}>
                <Link to={'/'} onClick={(event) => footerClickHandler(event)} >
                    <img className="" src={profile_photo} />
                </Link>
            </div>
        </div>
        </>
    );
}


export default Footer;
