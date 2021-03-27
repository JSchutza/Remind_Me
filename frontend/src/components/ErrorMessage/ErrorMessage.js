// imports here:


// component definitions here:
function ErrorMessage ({ errors }) {

    return (
        <>
            <div>

                <ul>
                    { errors && errors.map(eachErr => (
                        <li key={eachErr}>    { eachErr }   </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}



// exports here:
export default ErrorMessage;
