// imports here:
import { useTheme } from '../../context/ThemeContext.js';



// component definitions here:
function ThemeChanger() {
    const { themeType, setThemeType } = useTheme();


    return (
        <>
            <h3> {themeType} mode. </h3>

            {
                themeType === 'Dark' ?
                    <button onClick={() => setThemeType('Light')} > Light </button>
                :
                    <button onClick={() => setThemeType('Dark')} > Dark </button>
            }

        </>
    );
}




// exports here:
export default ThemeChanger;
