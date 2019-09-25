import React, { useState } from "react";

const Display = () => {
  const [displayState, setDisplayState] = useState(0);
  return <div className="display">
  {
    /* Display any props data here */
    displayState
  }
  </div>;
};

export default Display;
