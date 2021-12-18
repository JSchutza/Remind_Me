



import { GET_CODE, RESET_CODE } from '../types/code.js';



const getCode = (code) => ({
  type: GET_CODE,
  code,
});


const resetCode = () => ({
  type: RESET_CODE
})





export {
  getCode,
  resetCode,

}
