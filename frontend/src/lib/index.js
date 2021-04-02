const fs = require('await-fs');




// used to keep track of most recent notes
const initCounter = () => {
  let count = 0;

  function increment() {
    count++;
    if (count > 6) {
      count = 1;
      return count;
    }
    return count;
  }

  return increment;
};


const count = initCounter();




const getReadMe = async () => {
  try {
    let the_data = await fs.readFile('../../../../Remind_Me/README.md', 'utf8');
    return the_data;
  } catch (error) {
    console.error(error);
  }
};




export {
  count,
  getReadMe,


}
