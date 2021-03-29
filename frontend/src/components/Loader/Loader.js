// const arrows = [`↑`, `→`, `↓`, `←`, `↑`];

const makedot = (progress_bar) => {
    let result;
    if(progress_bar === undefined) {
        result = `✔`;
    } else if (progress_bar !== undefined) {
        result = `${progress_bar.join('')}`;
    }

    let dots = [`${result}`];

    return (icon = result) => {
        if(dots.length === 10) {
            dots = [`${icon}`];
            dots.push(`${icon}`);
            return dots;
        }

        dots.push(`${icon}`);
        return dots;
    }
}



const spinner = () => {
    let spinner_items = {
        "1": `↑`,
        "2": `→`,
        "3": `↓`,
        "4": `←`,
        "5": `↑`
    };

    let iteration = 1;

    return () => {
        if(iteration === 1) {
            iteration = 2;
            return [`${spinner_items[iteration]}`];
        }

        if(iteration === 2) {
            iteration = 3;
            return [`${spinner_items[iteration]}`];
        }

        if(iteration === 3) {
            iteration = 4;
            return [`${spinner_items[iteration]}`];
        }

        if(iteration === 4) {
            iteration = 5;
            return [`${spinner_items[iteration]}`];
        }

        if(iteration === 5) {
            iteration = 1;
            return [`${spinner_items[iteration]}`];
        }

    }
}



const initSpinner = spinner();
const initDots = makedot();


const Loader = ({ the_message }) => {


    return (
        <div>
            <h1> {`${the_message} ${initSpinner()} ${initDots(initSpinner()).join(' ')}`} </h1>
        </div>
    );
};


export default Loader;
