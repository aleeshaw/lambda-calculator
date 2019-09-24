import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <>
      {
        <button className="operator_button">
          <span>
            {props.operatorData.char}
          </span>
        </button>  
      }
    </>
  );
};

export default OperatorButton;