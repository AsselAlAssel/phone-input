import React, { useState } from "react";
import "./DropList.css";
import { AutoSizerFunPar, ListRowRenderer, Props } from "./constant";

import { dropListValueType } from "../assets/Constant";
import { List, AutoSizer } from "react-virtualized"
import DropListItem from "./DropListItem/DropListItem";

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
  countriesData = [...countriesData, ...countriesData];
  countriesData = [...countriesData, ...countriesData];
  countriesData = [...countriesData, ...countriesData];
  countriesData = [...countriesData, ...countriesData];
  countriesData = [...countriesData, ...countriesData];


  return (
    <div className="dropList" >
      <AutoSizer>
        {({ width, height }: AutoSizerFunPar) => (
          <List
            width={width}
            height={height}
            rowCount={countriesData.length}
            rowHeight={40}
            rowRenderer={({ key, index, style }: ListRowRenderer) => {
              const countryData = countriesData[index];

              return <div
                className="dropList__element"
                key={key} style={style}
                data-index={index}
                onClick={handelDropListItemClick}>

                <DropListItem
                  countryData={countryData}
                  onChangeSelectedValue={onChangeSelectedValue}
                  setShowDropList={setShowDropList}
                  indexDropListClicked={indexDropListClicked}
                  index={index}

                /></div>
            }}
          />
        )}



      </AutoSizer>

    </div>
  )
};

export default DropList;
