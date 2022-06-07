import React, { useContext, useState } from "react";
import "./DropListInput.css";
import { DropListInputProps } from "./types";
import { Classes } from "../Context/ClassesContext";
;

const DropListInput: React.VFC<DropListInputProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const ClassesContext=useContext(Classes)

  const handelPhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value.replaceAll("-", "");

    if (!isNaN(+enteredValue)) {
      setInputValue(enteredValue);
    }

  }

  return (
    <div className={ClassesContext?.dropListInputContainer??"dropListInputContainer"}>
      <span className={ClassesContext?.dropListInputContainer__code??"dropListInputContainer__code"}>({props.code})</span>

      <input
        type="text"
        value={inputValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}
        placeholder="xxx-xxx-xxx"
        maxLength={11}
        className={ClassesContext?.dropListInputContainer__inputNumber??"dropListInputContainer__inputNumber"}
        onChange={handelPhoneInputChange}
      />
    </div>
  );
};

export default DropListInput;
