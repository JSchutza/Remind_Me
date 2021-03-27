// imports here:
import { useTheme } from '../../context/ThemeContext.js';



// component definitions here:
function ThemeChanger() {
    const { themeType, setThemeType } = useTheme();
    // predefined themeType objects here for ease of use
    const lightMode = {
        type: 'Light',
        font: 'cursive',
        icon: 'light icon here'
    };

    const darkMode = {
        type: 'Dark',
        font: 'Roboto',
        icon: 'dark icon here'
    };


    return (
        <>
            <h3> {themeType.type} mode. </h3>

            {
                themeType.type === 'Dark' ?
                    <button onClick={() => setThemeType(lightMode)} > Light </button>
                :
                    <button onClick={() => setThemeType(darkMode)} > Dark </button>
            }

        </>
    );
}




// exports here:
export default ThemeChanger;
