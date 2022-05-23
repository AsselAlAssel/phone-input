import React, { useEffect, useState } from 'react';
import  "./DropListInput.css"
import {Props} from "./constant"

const DropListInput:React.FC<Props> = ({code}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const changePhoneInputHandler=(event:any)=>{
    const enteredValue:string=event.target.value;
    const deleteFormInputAndTheLastCharIsHyphen=enteredValue.length>=3&&enteredValue.at(-1)==="-";
    if(deleteFormInputAndTheLastCharIsHyphen){
      setInputValue(enteredValue.slice(0,-2));
    }
  const pressNumberNotCharacter=!isNaN(Number(enteredValue.at(-1)))|| enteredValue.length===0;
    if(pressNumberNotCharacter){
           setInputValue(enteredValue);
    }
  }

  useEffect(() => {
    const inputValueLengthDivedBy3withoutHyphen= inputValue.length < 11 && inputValue.replaceAll("-", "").length % 3 === 0 && inputValue.at(-1) !== "-";;
    if(inputValueLengthDivedBy3withoutHyphen && inputValue){
      setInputValue(preInputValue=>preInputValue+"-");
    }
  }, [inputValue])
  
  return (
    <div className="dropListInput">
            <span className='dropListInput__code'>({code})</span>
            <input
                type="text"
                value={inputValue}
                placeholder="xxx-xxx-xxx"
                maxLength={11}
                className="dropListInput__inputNumber"               
                onChange={changePhoneInputHandler}
            />

        </div>
  )
}

export default DropListInput;