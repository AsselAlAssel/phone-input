import React, { useState } from "react";
import "./DropListInput.css";
import { DropListInputProps } from "./types";

const DropListInput: React.VFC<DropListInputProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const InputPlaceholder=props.loading?"Loading" :"xxx-xxx-xxx";
  const classNameDropListInput=((props.loading||props.hasError)&&"invalid");

  return (
    <div className={`dropListInput ${classNameDropListInput}`}>
      <span className="dropListInput__code">({props.code})</span>
      <input
      
        type="text"
        value={inputValue.replace(/(\d{3})(\d{3})/, "$1-$2")}
        placeholder={InputPlaceholder}
        maxLength={11}
        className="dropListInput__inputNumber"
        onChange={(e) => setInputValue(e.target.value)}
      />
     
      {props.hasError && <span className="dropListInput_hasError">error loading countries</span>}
    </div>
  );
};

export default DropListInput;
