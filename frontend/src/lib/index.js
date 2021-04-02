




// used to keep track of most recent notes
const initCounter = () => {
  let count = 0;

  function increment() {
    count++;
    if (count > 5) {
      count = 1;
      return count;
    }
    return count;
  }

  return increment;
};


const count = initCounter();


export {
  count,


}
