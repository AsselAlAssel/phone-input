import React from 'react';
import "./DropListButton.css"
import {MdArrowDropDown} from "react-icons/md";
import { Props } from '../DropListButton/constant';


const DropListButton:React.FC<Props> = ({flag,setShowDropList,name}) => {
  return (
    <button onClick={()=>setShowDropList(true)}
    className="dropListButton">
    <img src={flag} alt={`flag for ${name} `} />
    <span><MdArrowDropDown/></span>

</button>
  )
}

export default DropListButton