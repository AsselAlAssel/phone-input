import React, { useState } from "react";
import "./DropListInput.css";
import { DropListInputProps } from "./types";

const DropListInput: React.VFC<DropListInputProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
 
  const handelPhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value.replaceAll("-","");

    console.log(enteredValue);
    if (!isNaN(+enteredValue)) {
      setInputValue(enteredValue);
    }

  }

  return (
    <div className={"dropListInput"}>
      <span className="dropListInput__code">({props.code})</span>
      <input
        type="text"
        value={inputValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}
        placeholder="xxx-xxx-xxx"
        maxLength={11}
        className="dropListInput__inputNumber"
        onChange={handelPhoneInputChange}
      />
    </div>
  );
};

export default DropListInput;
