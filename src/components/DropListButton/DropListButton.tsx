import React,{useContext} from "react";
import "./DropListButton.css";
import { MdArrowDropDown } from "react-icons/md";
import { DropListButtonProps } from "./types";
import { Classes } from "../Context/ClassesContext";

const DropListButton: React.VFC<DropListButtonProps> = (props) => {
  
const ClassesContext=useContext(Classes);



  const buttonClickedHandler = () => {
    props.onChangeShowDropListValue(!props.showDropList);
  };
  return (
    <div className={ClassesContext?.dropListButtonContainer??"dropListButtonContainer"}>
    <button onClick={buttonClickedHandler} id="ButtonForShowDropList">
      <img src={props.flag} alt={`flag for ${props.name} `} />
      <span>
        <MdArrowDropDown />
      </span>
    </button>
    </div>
  );
};

export default DropListButton;
