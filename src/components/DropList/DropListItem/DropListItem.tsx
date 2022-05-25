import { Props } from "./constant";
import {Fragment} from 'react'
import { dropListValueType } from "../../assets/Constant";
import { AiOutlineCheck } from "react-icons/ai";
import "./DropListItem.css"


const DropListItem=(props:Props<dropListValueType>)=>{

  
    return(
        <Fragment>
            <div className="dropList__elementContent">
               <img src={props.countryData.flag} alt={`flag for ${props.countryData.name}`} />
               <span> {props.countryData.name}</span>
              <span> {props.countryData.dialCode}</span>
            </div>
             {props.index === props.indexDropListClicked && (
              <div className="dropList__elementChecked">
                <AiOutlineCheck />
              </div>
            )}
        </Fragment>
    )
}

export default DropListItem;