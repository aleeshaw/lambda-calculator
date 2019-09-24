import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="number-button">
        <span>
          {props.buttonData}
        </span>
      </button>
      }
    </>
  );
};
 export default NumberButton;