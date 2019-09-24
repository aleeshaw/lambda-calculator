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
  
  return (
    <div>
      {
        numberState.map((number, index) => (
          <NumberButton numbersData={number} key={index} />
        ))
      }
    </div>
  );
};

export default Numbers;
