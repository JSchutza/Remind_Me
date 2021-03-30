import { useTheme } from '../../context/ThemeContext.js';





const Div = ({ children, selectors }) => {
    const { themeType } = useTheme();

    let css_names;
    if (selectors.length === 0){
        css_names = 'default';
    }

    if (selectors.length > 0) {
        css_names = selectors.join(' ');
    }


    return (
        <div className={`${themeType.type} ${css_names}`}>
            { children }
        </div>
    );
};


export default Div;
