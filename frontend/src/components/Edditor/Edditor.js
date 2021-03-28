import { useState, useEffect } from 'react';










const Edditor = () => {
    // state here
    const [ input, setInput ] = useState('');


    return (
        <>
            <textarea
                value={input}
                onChange={ (event) => setInput(event.target.value)}
            />
        </>
    );
};



export default Edditor;
