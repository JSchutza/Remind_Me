import Div from '../Div';
import { useState, useEffect } from 'react';


// import styles
import { styles } from '../Footer';
import profile_photo from './profile_pic.jpg';




function Footer() {
// state here
    const [ show, setShow ] = useState(false);


    useEffect(() => {

    },[show]);



    const footerClickHandler = (event) => {
        event.preventDefault();
        setShow(true);
    };


    return (
        <>
        <footer className={styles.main_footer}>
            <Div selectors={[styles.footer_container]}>
                <a onClick={(event) => footerClickHandler(event)}>
                    <img src={profile_photo} />
                </a>


                {/* have a onclick that shows a popup info component */}
                {
                    show === true ? <h1>Testing</h1> : <div></div>
                }
            </Div>
        </footer>
        </>
    );
}


export default Footer;
