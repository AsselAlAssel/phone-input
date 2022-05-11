import React from 'react'
import "./DropList.css"
import { dropListValueType } from './DropListForm'
type Props={
    countriesData:dropListValueType[],
    setDropListValue: React.Dispatch<React.SetStateAction<dropListValueType | undefined>>,
    setShowDropList: React.Dispatch<React.SetStateAction<boolean>>,


}

const DropList:React.FC<Props> = ({countriesData,setDropListValue,setShowDropList}) => {
  
    const handelDropListItemClick = (event:any) => {
        const index = event.target.getAttribute("data-index");
       setDropListValue(countriesData[index]);
        setShowDropList(false);
    }

    const List = countriesData.map((element, index) => {
        return (
            <p key={element.name} data-index={index} onClick={handelDropListItemClick}>
                <img src={element.flag} alt={`flag for ${element.name}`} />
                <span>  {element.name}</span>
                <span>  {element.dialCode}</span>

            </p>
        )
    })
    return <div className="dropList">{List}</div>


}

export default DropList; 