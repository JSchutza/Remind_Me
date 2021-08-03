// imports here:
import { materialDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { useTheme } from '../../context/ThemeContext.js';
import Div from '../Div';
import { styles } from '../ThemeChanger';

import dark_img from './dark_img.svg';
import light_img from './light_img.svg';
import { Link } from "react-router-dom";

// component definitions here:
function ThemeChanger() {
    const { themeType, setThemeType } = useTheme();
    // predefined themeType objects here for ease of use
    const lightMode = {
        type: 'Light',
        icon: light_img,
        light_syntax: coy
    };

    const darkMode = {
        type: 'Dark',
        icon: dark_img,
        dark_syntax: materialDark
    };


    const changeThemeClickHandler = (event, the_theme) => {
        event.preventDefault();
        setThemeType(the_theme);
    }


    const smartThemeClickHandler = (event, the_theme) => {
        event.preventDefault();
        if (the_theme.type === 'Light') {
            setThemeType(darkMode);
        } else if (the_theme.type === 'Dark') {
            setThemeType(lightMode);
        }
    }

    return (
    <>
        <Div selectors={[styles.container]}>
            <Div selectors={[]} >
                    <Link onClick={(event) => smartThemeClickHandler(event, themeType)}>
                    <h4>{themeType.type} Mode </h4>
                </ Link>
            </Div>


            <Div selectors={[]}>

            {
            themeType.type === 'Dark' ?

            <Div selectors={[styles.the_icon]} >
                <Link onClick={(event) => changeThemeClickHandler(event, lightMode)} >
                    <img src={themeType.icon}/>
                </Link>
            </Div>

            :

            <Div selectors={[styles.the_icon]} >
                <Link onClick={(event) => changeThemeClickHandler(event, darkMode)} >
                    <img src={themeType.icon} />
                </Link>
            </Div>
            }

            </Div>
        </Div>
    </>
    );



}




// exports here:
export default ThemeChanger;
