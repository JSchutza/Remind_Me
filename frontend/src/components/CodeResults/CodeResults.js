

import { useSelector } from 'react-redux';





const CodeResults = () => {
  const results = useSelector(store => store.codeEvalReducer.code);

  // if the results are not there
  if(!results) {
    return (
      <div>
          <h1>Loading ....</h1>
      </div>
    );
  }

  // if the results are there show the results
  return (
    <div>
      <h1> Standard Output: {results.output} </h1>
      <h2> Memory: {results.memory} </h2>
      <h2> Time: {results.cpuTime} </h2>
    </div>
  );
};

export default CodeResults;
