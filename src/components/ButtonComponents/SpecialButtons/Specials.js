import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);

  return (
    <div>
      {
        specialsState.map((special, index) => (
          <SpecialButton specialsData={special} key={index} />
        ))
      }
    </div>
  );
};

export default Specials;