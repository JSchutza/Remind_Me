// imports here:
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunk_logoutUser, thunk_loginDemoUser } from '../../thunks/session.js';
import { useUser } from '../../context/UserContext.js';
import { useHistory } from 'react-router-dom';
import Div from '../Div';

// css
import styles from './navbar.module.css';



// component definitions here:
function NavBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isUser } = useUser();

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_logoutUser());
        history.push('/login');

        // ---- save below DO NOT DELETE -- need it for later****
        // setToggleLoader(true);

        // const the_interval = setInterval(() => {
        //     setToggleLoader(false);
        //     setToggleLoader(true);
        // }, 19);

        // setTimeout(() => {
        //     clearInterval(the_interval);
        //     setToggleLoader(false);
        //     dispatch(thunk_logoutUser());
        // }, 2000);

    };





    const demoLoginHandler = (event) => {
        event.preventDefault();
        dispatch(thunk_loginDemoUser());
        history.push('/profile');
    };





    // if there is NOT a user
    if(isUser === null) {
        return (
        <>
        <Div selectors={[styles.navbar_container]}>
            <nav>
                <ul>
                    <li> <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/'> Home </NavLink> </li>
                    <li> <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/login'> Login </NavLink> </li>
                    <li> <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/signup'> Signup </NavLink> </li>
                </ul>
            </nav>
        </Div>


        <Div selectors={[styles.demouser_container]}>
            <Link onClick={demoLoginHandler}> Demo </ Link>
        </Div>

        </>
        );
    }


    // if there IS a user
    return (
    <>
    <Div selectors={[styles.navbar_container]}>
        <nav>
            <ul>
                <li> <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/'> Home </NavLink> </li>
                <li> <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/profile'> Profile </NavLink> </li>
            </ul>
        </nav>
    </Div>

    <Div selectors={[styles.logout_container]}>
        <Link onClick={logoutHandler}> Logout </ Link>
    </Div>

    <Div selectors={[styles.notebooks_containter]}>
        <NavLink className={styles.navbar_navlink_unselected} activeClassName='selected' exact to='/notebooks'> Notebooks </NavLink>
    </Div>
    </>
    );




}




// exports here:
export default NavBar;
