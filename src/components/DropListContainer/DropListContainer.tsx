import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import { dropListValueType } from '../types/types';
import { DropListContainerProps } from './types';
import loadingFlag from "../../assets/images/loadingFlag.png";
import errorFlag from "../../assets/images/errorFlag.png";


const DropListContainer: React.VFC<DropListContainerProps<dropListValueType>> = (props) => {
  const [showDropList, setShowDropList] = useState(false);

  let [flagCountry,nameCountry,codeCountry]=["","",""];

  if (props.loading) {
    flagCountry=loadingFlag;
    nameCountry = "loading image";
    codeCountry = "xxx";

  } else if (props.hasError) {
    flagCountry=errorFlag;
    nameCountry = "error image";
    codeCountry = "xxx";
  } else {
    flagCountry = props.selectedCountry?.flag ?? props.countriesCode[0].flag;
    nameCountry = props.selectedCountry?.name ?? props.countriesCode[0].name;
    codeCountry=props.selectedCountry?.dialCode ?? props.countriesCode[0].dialCode;
  }



  return (
    <div className='dropListContainer'>
      <div className='dropListContainer__ButtonAndInput'>
        <DropListButton
          flag={flagCountry}
          name={nameCountry}
          showDropList={showDropList}
          setShowDropList={setShowDropList}
          loading={props.loading}
          hasError={props.hasError}

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
    </div>
  )
}

export default DropListContainer