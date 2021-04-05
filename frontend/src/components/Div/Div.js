import { useTheme } from '../../context/ThemeContext.js';





const Div = ({ children, selectors }) => {
    const { themeType } = useTheme();

    const flex_class = 'please_flex';

    let css_names;
    if (selectors.length === 0){
        css_names = 'default';
    }

    if (selectors.length > 0) {
        css_names = selectors.join(' ');
    }


    return (
        <div className={`${flex_class} ${themeType.type} ${css_names}`}>
            { children }
        </div>
    );
};


export default Div;
