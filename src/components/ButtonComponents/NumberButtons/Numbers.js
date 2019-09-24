import React, { useState } from "react";

//import any components needed
import { numbers } from "../../../data.js";
import NumberButton from "./NumberButton.js"

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);

  /* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
   
  
  return (
    <div>
      {
        numberState.map((number, index) => (
          <NumberButton buttonData={number} key={index} />
        ))
      }
    </div>
  );
};

export default Numbers;
