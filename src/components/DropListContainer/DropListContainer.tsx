import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import { dropListValueType } from '../types/types';
import { DropListContainerProps } from './types';
import loadingFlag from "../../assets/images/loadingFlag.png";

const DropListContainer: React.VFC<DropListContainerProps<dropListValueType>> = (props) => {
  const [showDropList, setShowDropList] = useState(false);

  let [flagCountry,nameCountry,codeCountry]=["","",""];

  if (props.loading) {
    flagCountry=loadingFlag;
    nameCountry = "loading image";
    codeCountry = "xxx";

  }else {
    flagCountry = props.selectedCountry?.flag ?? props.countriesCode[0].flag;
    nameCountry = props.selectedCountry?.name ?? props.countriesCode[0].name;
    codeCountry=props.selectedCountry?.dialCode ?? props.countriesCode[0].dialCode;
  }



  return (
    <div className={props.classes?.dropListContainer??"dropListContainer"}>
      <div className={props.classes?.divForInputAndButton??"dropListContainer__ButtonAndInput"}>
        <DropListButton
          flag={flagCountry}
          name={nameCountry}
          showDropList={showDropList}
          setShowDropList={setShowDropList}
          loading={props.loading}
        />
        <DropListInput
          code={codeCountry}
          loading={props.loading}
          hasError={props.hasError}
        />
      </div>
      {showDropList && < DropList
        countriesData={props.countriesCode}
        onChangeSelectedValue={props.onChangeSelectedValue}
        setShowDropList={setShowDropList}
        selectedCountry={props.selectedCountry}
        loading={props.loading}
        hasError={props.hasError} />
      }
     {props.hasError && <p className='error-text'>{props.helperText}</p>}
    </div>
  )
}

export default DropListContainer