import React from "react";
import "./DropListButton.css";
import { MdArrowDropDown } from "react-icons/md";
import { DropListButtonProps } from "./types";

const DropListButton: React.VFC<DropListButtonProps> = ({
  showDropList,
  flag,
  setShowDropList,
  name,
}) => {
  const buttonClickedHandler = (event: any) => {
    event.stopPropagation();
    setShowDropList((showDropList) => !showDropList);
  };
  return (
    <button onClick={buttonClickedHandler} className="dropListButton">
      <img src={flag} alt={`flag for ${name} `} />
      <span>
        <MdArrowDropDown />
      </span>
    </button>
  );
};

export default DropListButton;
