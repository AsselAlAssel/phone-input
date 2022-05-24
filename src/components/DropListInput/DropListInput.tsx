import React, { useState } from "react";
import "./DropListInput.css";
import { Props } from "./constant";

const DropListInput: React.VFC<Props> = ({ code }) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="dropListInput">
      <span className="dropListInput__code">({code})</span>
      <input
        type="text"
        value={inputValue.replace(/(\d{3})(\d{3})/, "$1-$2")}
        placeholder="xxx-xxx-xxx"
        maxLength={11}
        className="dropListInput__inputNumber"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default DropListInput;
