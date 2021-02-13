// imports here:
import { NavLink } from 'react-router-dom';


// component definitions here:
function NavBar() {
    return (
        <>
            <nav>
                <ul>

                    <li>
                        <NavLink activeClassName='selected' exact to='/'>
                            Home
                        </NavLink>
                    </li>


                    <li>
                        <NavLink activeClassName='selected' exact to='/login'>
                            Login
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </>
    );
}




// exports here:
export default NavBar;
