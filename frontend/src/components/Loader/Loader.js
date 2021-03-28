import { useState, useEffect } from 'react';




const makedot = () => {
    let dots = ['.'];

    return () => {
        if(dots.length === 10) {
            dots = ['.'];
            dots.push('.');
            return dots;
        }

        dots.push('.');
        return dots;
    }
}

const initDots = makedot();


const Loader = ({ the_message }) => {
    return (
        <div>
            <h1> {`${the_message} ${initDots().join(' ')}`} </h1>
        </div>
    );
};


export default Loader;
