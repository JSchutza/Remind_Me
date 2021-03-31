// imports here:
import { styles } from '../ErrorMessage';
import Div from "../Div";




// component definitions here:
function ErrorMessage ({ errors }) {

    return (
        <>
            <Div selectors={[styles.errors_wrapper]}>
                <Div selectors={[styles.errors_containter]} >
                    <ul>
                        { errors && errors.map(eachErr => (
                            <li key={eachErr}>    { eachErr }   </li>
                            ))
                        }
                    </ul>
                </Div>

            </Div>
        </>
    );
}



// exports here:
export default ErrorMessage;
