// imports here:
import { createContext, useContext, useState } from 'react';



export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);



function ThemeProvider({ children }) {
    const [themeType, setThemeType] = useState({
        // other properties specific to the dark theme here
        type: 'Dark',
        font: 'Roboto',
        icon: 'dark icon here'
    });


    return (
        <ThemeContext.Provider value={{ themeType, setThemeType}}>
            { children }
        </ThemeContext.Provider>
    );
}




// exports here:
export default ThemeProvider;
