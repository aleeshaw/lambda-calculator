import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {
        <button className="number-button">
          <span>
            {props.numbersData}
          </span>
        </button>
      }
    </>
  );
};
 export default NumberButton;