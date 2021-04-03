import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Div from '../Div';


// import styles
import { styles } from '../Footer';
import profile_photo from './profile_pic.jpg';




function Footer() {
// state here
    const [ show, setShow ] = useState(false);
    const [ first, setFirst ] = useState(0);
    const [ second, setSecond ] = useState(false);

    useEffect(() => {

    }, [show, first, second]);


    // DO NOT CHANGE
    const footerClickHandler = (event) => {
        event.preventDefault();

        if(first === 0) {
            setShow(true);
            setFirst(1);
            setSecond(true);
        }

        if (second === true) {
            setShow(false);
            setSecond(false);
            setFirst(0);
        }

    };


    return (
        <>
        <footer className={styles.main_footer}>
            <Div selectors={[styles.footer_container]}>
                <a onClick={(event) => footerClickHandler(event)} >
                    <img className="" src={profile_photo} />
                </a>



                {
                    show === true ?
                    <>
                        <ul>
                            <li> Joshua Schutza </li>

                            <a href='https://github.com/JSchutza/Remind_Me' target="_blank" >
                                <li> GitHub </li>
                            </a>

                            <NavLink exact to="/readme" >
                                <li>README</li>
                            </NavLink>

                        </ul>
                    </>
                    :
                    <div></div>
                }
            </Div>
        </footer>
        </>
    );
}


export default Footer;
