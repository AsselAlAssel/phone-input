import React from 'react';
import "./DropListButton.css"
import { dropListValueType } from './DropListForm';
import {MdArrowDropDown} from "react-icons/md";

type Props={
  flag:string,
  setShowDropList:React.Dispatch<React.SetStateAction<boolean>>,
  name:string


}

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