import React from 'react'
import "./DropList.css"
import { Props } from './constant'

const DropList:React.VFC<Props> = ({countriesData,setDropListValue,setShowDropList}) => {
  
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