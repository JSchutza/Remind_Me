// imports here:
import { createContext, useContext, useState } from 'react';
import dark_img from './dark_img.svg';

import { materialDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'




export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);



function ThemeProvider({ children }) {
    const [ themeType, setThemeType ] = useState({
        // other properties specific to the dark theme here
        type: 'Dark',
        font: 'Roboto',
        icon: dark_img,
        dark_syntax: materialDark
    });


    return (
        <ThemeContext.Provider value={{ themeType, setThemeType}}>
            { children }
        </ThemeContext.Provider>
    );
}




// exports here:
export default ThemeProvider;
