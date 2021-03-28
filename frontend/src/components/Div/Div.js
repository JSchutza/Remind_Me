





const Div = ({ current_theme, additional_selectors, children }) => {
    let selectors;

    if (additional_selectors.length > 1){
        selectors = additional_selectors.join(' ');
    } else if(additional_selectors.length === 1) {
        selectors = additional_selectors;
    } else if (additional_selectors.length === 0){
        selectors = "default";
    }


    return (
        <div className={`${current_theme.type} ${selectors}`}>
            { children }
        </div>
    );
};


export default Div;
