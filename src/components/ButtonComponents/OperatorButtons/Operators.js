import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operaterState] = useState(operators);

  return (
    <div>
      {
        operaterState.map((operator, index) => (
          <OperatorButton operatorData={operator} key={index} />
        ))
      }
    </div>
  );
};

export default Operators;