import { useState, useEffect } from 'react';




const makedot = () => {
    let dots = ['.'];

    return () => {
        dots.push('.');
        return dots;
    }
}

const initDots = makedot();


const Loader = ({ the_message }) => {
    const [ dots, setDots ] = useState(initDots());
    const [ tracker, setTracker ] = useState([]);

    useEffect(() =>{
        setTracker(initDots());
    }, [dots, tracker])


    return (
        <div>
            <h1> {`${the_message} ${tracker.join('')}` + `${dots.join('')}`} </h1>
        </div>
    );
};


export default Loader;
