import React from "react";
import "./DropListButton.css";
import { MdArrowDropDown } from "react-icons/md";
import { DropListButtonProps } from "./types";

const DropListButton: React.VFC<DropListButtonProps> = (props) => {
  const buttonClickedHandler = () => {
    props.setShowDropList(!props.showDropList);
  };
  const classNameDropListButton=((props.loading||props.hasError)&&"invalid");
  return (
    <div className={`dropListButton ${classNameDropListButton}`}>
    <button onClick={buttonClickedHandler} className="dropListButton__button">
      <img src={props.flag} alt={`flag for ${props.name} `} />
      <span>
        <MdArrowDropDown />
      </span>
    </button>
    </div>
  );
};

export default DropListButton;
