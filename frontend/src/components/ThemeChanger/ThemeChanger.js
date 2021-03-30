// imports here:
import { useTheme } from '../../context/ThemeContext.js';
import Div from '../Div';
import { styles } from '../ThemeChanger';

import dark_img from './dark_img.svg';
import light_img from './light_img.svg';

// component definitions here:
function ThemeChanger() {
    const { themeType, setThemeType } = useTheme();
    // predefined themeType objects here for ease of use
    const lightMode = {
        type: 'Light',
        font: 'cursive',
        icon: light_img
    };

    const darkMode = {
        type: 'Dark',
        font: 'Roboto',
        icon: dark_img
    };


    const changeThemeClickHandler = (event, the_theme) => {
        event.preventDefault();
        setThemeType(the_theme);
    }



    return (
    <>
        <Div selectors={[styles.container]}>
            <Div selectors={[]}>

            {
            themeType.type === 'Dark' ?

            <Div selectors={[styles.the_icon]} >
                <a onClick={(event) => changeThemeClickHandler(event, lightMode)} >
                    <img src={themeType.icon}/>
                        {/* <span> {themeType.type} </span> */}
                </a>
            </Div>

            :

            <Div selectors={[styles.the_icon]} >
                <a onClick={(event) => changeThemeClickHandler(event, darkMode)} >
                    <img src={themeType.icon} />
                        {/* <span> {themeType.type} </span> */}
                </a>
            </Div>
            }

            </Div>
        </Div>
    </>
    );



}




// exports here:
export default ThemeChanger;
