import { useTheme } from '../../context/ThemeContext.js';





const Div = ({ children }) => {
    const { themeType } = useTheme();


    return (
        <div className={`${themeType.type}`}>
            { children }
        </div>
    );
};


export default Div;
