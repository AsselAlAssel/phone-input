import { useEffect, useState } from "react";
import "./DropListInput.css"

const DropListInput = props => {
    const [inputValue, setInputValue] = useState("");


    const changePhoneInputHandler = (event) => {
        const EnteredValue = event.target.value;
        const IsInputValueHasLengthMorThan3AndLastCharIsHyphen = EnteredValue.length >= 3 && EnteredValue.at(-1) === "-";
        if (IsInputValueHasLengthMorThan3AndLastCharIsHyphen) {
            setInputValue(EnteredValue.slice(0, -2));
            return;
        }



        const isEnteredValueIsNumberAndItsLengthLesThan10 = !isNaN(EnteredValue.replaceAll("-", "")) && EnteredValue.replaceAll("-", "").length <= 9;
        if (isEnteredValueIsNumberAndItsLengthLesThan10) {
            setInputValue(EnteredValue);
        }
    }


    useEffect(() => {

        const IsInputValueHasNoLengthBetween0And11AndDivideBy3 = inputValue.length > 0 && inputValue.length < 11 && inputValue.replaceAll("-", "").length % 3 === 0 && inputValue.at(-1) !== "-";
        if (IsInputValueHasNoLengthBetween0And11AndDivideBy3) {
            setInputValue(prevInputValue => prevInputValue + "-");
        }
    }, [inputValue]);

    return (
        <div className="dropListForm__dropListInput">
            <span>({props.code})</span>
            <input
                type="tel"
                placeholder="xxx-xxx-xxx"
                maxLength={11}
                value={inputValue}
                onChange={changePhoneInputHandler}
            />

        </div>
    )

}
export default DropListInput;