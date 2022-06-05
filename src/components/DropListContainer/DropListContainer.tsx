import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import { dropListValueType } from '../types/types';
import { DropListContainerProps } from './types';

const DropListContainer: React.VFC<DropListContainerProps<dropListValueType>> = (props) => {
  const [showDropList, setShowDropList] = useState(false);

  const flagCountry = props.selectedCountry?.flag ?? props.countriesCode[0].flag;
  const nameCountry = props.selectedCountry?.name ?? props.countriesCode[0].name;
  const codeCountry = props.selectedCountry?.dialCode ?? props.countriesCode[0].dialCode;


  return (
    <div className={props.classes?.dropListContainer ?? "dropListContainer"}>
      <div className={props.classes?.divForInputAndButton ?? "dropListContainer__ButtonAndInput"}>
        <DropListButton
          flag={flagCountry}
          name={nameCountry}
          showDropList={showDropList}
          setShowDropList={setShowDropList}

        />
        <DropListInput
          code={codeCountry}
          hasError={props.hasError}
        />
      </div>
      {showDropList && < DropList
        countriesData={props.countriesCode}
        onChangeSelectedValue={props.onChangeSelectedValue}
        setShowDropList={setShowDropList}
        selectedCountry={props.selectedCountry}
        hasError={props.hasError} />
      }
      {props.hasError && <p className='error-text'>{props.helperText}</p>}
    </div>
  )
}

export default DropListContainer