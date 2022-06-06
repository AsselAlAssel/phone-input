import React, { useState, createContext } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import { dropListValueType } from '../types/types';
import { DropListContainerProps } from './types';
import {Classes} from '../Context/ClassesContext'
const DropListContainer: React.VFC<DropListContainerProps<dropListValueType>> = (props) => {
  const [showDropList, setShowDropList] = useState(false);

  const flagCountry = props.selectedCountry?.flag ?? props.countriesCode[0].flag;
  const nameCountry = props.selectedCountry?.name ?? props.countriesCode[0].name;
  const codeCountry = props.selectedCountry?.dialCode ?? props.countriesCode[0].dialCode;
  const handelShowDropListChange = (value: boolean) => {
    setShowDropList(value);
  }


  return (
    <Classes.Provider value={props.classes}>


      <div className={props.classes?.dropListContainer ?? "dropListContainer"}>
        <div className={props.classes?.ButtonAndInputContainer ?? "dropListContainer__ButtonAndInput"}>
          <DropListButton
            flag={flagCountry}
            name={nameCountry}
            showDropList={showDropList}
            onChangeShowDropListValue={handelShowDropListChange}

          />
          <DropListInput
            code={codeCountry}
            hasError={props.hasError}
          />
        </div>
        {showDropList && < DropList
          countriesData={props.countriesCode}
          onChangeSelectedValue={props.onChangeSelectedValue}
          onChangeShowDropListValue={handelShowDropListChange}
          selectedCountry={props.selectedCountry}
          hasError={props.hasError} />
        }
        {props.hasError && <p className={props.classes?.ErrorText??'ErrorText'}>{props.helperText}</p>}
      </div>
    </Classes.Provider>
  )
}

export default DropListContainer