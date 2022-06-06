import { DropListItemProps } from "./types";
import {Fragment, useContext} from 'react'
import { dropListValueType } from "../types/types";
import { AiOutlineCheck } from "react-icons/ai";
import "./DropListItem.css"
import { Classes } from "../Context/ClassesContext";



const DropListItem=(props:DropListItemProps<dropListValueType>)=>{
  const ClassesContext=useContext(Classes);

  
    return(
        <Fragment>
            <div className={ClassesContext?.dropListCountries__ItemContainer??"dropListCountries__ItemContent"}>
               <img src={props.countryData.flag} alt={`flag for ${props.countryData.name}`} />
               <span> {props.countryData.name}</span>
              <span> {props.countryData.dialCode}</span>
            </div>
             {props.selectedCountry?.dialCode === props.countryData.dialCode && (
              <div>
                <AiOutlineCheck />
              </div>
            )}
        </Fragment>
    )
}

export default DropListItem;