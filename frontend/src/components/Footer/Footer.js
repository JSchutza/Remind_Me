import Div from '../Div';



// import styles
import { styles } from '../Footer';





function Footer() {



    return (
        <>
        <footer className={styles.main_footer}>
            <Div selectors={[styles.footer_container]}>
            {/* have a onclick that shows a popup info component */}
                <h1>The footer</h1>
            </Div>
        </footer>
        </>
    );
}


export default Footer;
