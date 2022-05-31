import { DropListItemProps } from "./types";
import {Fragment} from 'react'
import { dropListValueType } from "../types/types";
import { AiOutlineCheck } from "react-icons/ai";
import "./DropListItem.css"


const DropListItem=(props:DropListItemProps<dropListValueType>)=>{

  
    return(
        <Fragment>
            <div className="dropList__elementContent">
               <img src={props.countryData.flag} alt={`flag for ${props.countryData.name}`} />
               <span> {props.countryData.name}</span>
              <span> {props.countryData.dialCode}</span>
            </div>
             {props.selectedCountry?.dialCode === props.countryData.dialCode && (
              <div className="dropList__elementChecked">
                <AiOutlineCheck />
              </div>
            )}
        </Fragment>
    )
}

export default DropListItem;