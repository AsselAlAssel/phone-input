import React, { useState } from "react";
import "./DropList.css";
import {AutoSizerFunPar,ListRowRenderer,DropListProps} from './types'
import { dropListValueType } from "../types/types";
import { List, AutoSizer } from "react-virtualized"
import DropListItem from "../DropListItem/DropListItem";
import ClickAwayListener from "react-click-away-listener"


const DropList: React.VFC<DropListProps<dropListValueType>> = (props) => {

  const handelDropListItemClick = (event: any) => {
    const dropListElementClicked = event.target.closest(".dropList__element");
    const index = dropListElementClicked.getAttribute("data-index");
   props.onChangeSelectedValue(props.countriesData[index]);
    props.setShowDropList(false);

  };

  const handleClickAwayListener=()=>{
    props.setShowDropList(false);
  }
  return (
    <ClickAwayListener onClickAway={handleClickAwayListener}>
      <div className="dropList" >
        <AutoSizer>
          {({ width, height }: AutoSizerFunPar) => (
            <List
              width={width}
              height={height}
              rowCount={props.countriesData.length}
              rowHeight={40}
              rowRenderer={({ key, index, style }: ListRowRenderer) => {
                const countryData = props.countriesData[index];

                return <div
                  className="dropList__element"
                  key={key} style={style}
                  data-index={index}
                  onClick={handelDropListItemClick}>

                  <DropListItem
                    countryData={countryData}
                    onChangeSelectedValue={props.onChangeSelectedValue}
                    setShowDropList={props.setShowDropList}
                    selectedCountry={props.selectedCountry?props.selectedCountry:props.countriesData[0]}
                   

                  /></div>
              }}
            />
          )}



        </AutoSizer>

      </div>
    </ClickAwayListener>
  )
};

export default DropList;
