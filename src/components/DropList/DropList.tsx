import React, { useState } from "react";
import "./DropList.css";
import { Props } from "./constant";
import { AiOutlineCheck } from "react-icons/ai";
import { dropListValueType } from "../assets/Constant";

const DropList: React.VFC<Props<dropListValueType>> = ({
  countriesData,
  onChangeSelectedValue,
  setShowDropList,
  indexDropListClicked,
}) => {
  const handelDropListItemClick = (event: any) => {
    const dropListElementClicked = event.target.closest(".dropList__element");
    const index = dropListElementClicked.getAttribute("data-index");
    onChangeSelectedValue(countriesData[index]);
    setShowDropList(false);
  };

  return (
    <div className="dropList">
      {countriesData.map((element, index) => {
        return (
          <div
            className="dropList__element"
            key={element.name}
            data-index={index}
            onClick={handelDropListItemClick}
          >
            <div className="dropList__elementContent">
              <img src={element.flag} alt={`flag for ${element.name}`} />
              <span> {element.name}</span>
              <span> {element.dialCode}</span>
            </div>
            {index === indexDropListClicked && (
              <div className="dropList__elementChecked">
                <AiOutlineCheck />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DropList;
