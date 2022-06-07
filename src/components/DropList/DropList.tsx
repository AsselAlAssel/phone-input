import "./DropList.css";
import { AutoSizerFunPar, ListRowRenderer, DropListProps } from './types'
import { dropListValueType } from "../types/types";
import { List, AutoSizer } from "react-virtualized"
import DropListItem from "../DropListItem/DropListItem";
import ClickAwayListener from "react-click-away-listener"
import { Classes } from "../Context/ClassesContext";
import { useContext } from "react";



const DropList: React.VFC<DropListProps<dropListValueType>> = (props) => {
  const ClassesContext = useContext(Classes);

  const handelDropListItemClick = (event: any) => {
    const dropListElementClicked = event.target.closest("#dropList__element");
    const index = dropListElementClicked.getAttribute("data-index");
    props.onChangeSelectedValue(props.countriesData[index]);
    props.onChangeShowDropListValue(false);

  };

  const handleClickAwayListener = () => {
    props.onChangeShowDropListValue(false);
  }
  return (
    <ClickAwayListener onClickAway={handleClickAwayListener}>
      <div className={ClassesContext?.dropListContainer ?? "dropListCountries"} >
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
                  className={ClassesContext?.dropListCountries__ItemContainer
                    ?? "dropListCountries__ItemContainer"}
                  id="dropList__element"
                  key={key} style={style}
                  data-index={index}
                  onClick={handelDropListItemClick}>

                  <DropListItem
                    countryData={countryData}
                    onChangeSelectedValue={props.onChangeSelectedValue}
                    selectedCountry={props.selectedCountry ? props.selectedCountry : props.countriesData[0]}


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
