import Div from '../Div';
import { useState, useEffect } from 'react';


// import styles
import { styles } from '../Footer';
import profile_photo from './profile_pic.jpg';




function Footer() {
// state here
    const [ show, setShow ] = useState(false);
    const [ hidden, setHidden ] = useState('');

    useEffect(() => {

    },[show, hidden]);



    const footerClickHandler = (event, boolean, is_hidden) => {
        event.preventDefault();
        setShow(boolean);
        setHidden(is_hidden);
    };


    return (
        <>
        <footer className={styles.main_footer}>
            <Div selectors={[styles.footer_container]}>
                <a onClick={(event) => footerClickHandler(event, true, '')}>
                    <img className={`${hidden}`} src={profile_photo} />
                </a>



                {
                    show === true ?
                    <>
                    <a onClick={(event) => footerClickHandler(event, false, 'hidden')}>
                        <img className={`${hidden}`} src={profile_photo} />
                    </a>
                        <ul>
                            <li> Joshua Schutza </li>
                            <a href='https://github.com/JSchutza/Remind_Me'> <li> GitHub </li> </a>
                            <a href=''> <li>README</li> </a>
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
