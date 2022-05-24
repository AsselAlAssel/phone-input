import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import { dropListValueType } from '../assets/Constant';
import { Props } from './constant';



const DropListFrom: React.VFC<Props<dropListValueType>> = (props) => {
  const [showDropList, setShowDropList] = useState<boolean>(false);

  React.useEffect(() => {
    function handleClick() {
      setShowDropList(false);
    }

    document.querySelector("body")?.addEventListener("click", handleClick)
    return () => {
      document.querySelector("body")?.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className='dropListContainer' onSubmit={event => event.preventDefault()}>
      <div className='dropListContainer__ButtonAndInput'>
        <DropListButton
          flag={props.selectedCountry ? props.selectedCountry.flag : props.countriesCode[0].flag}
          name={props.selectedCountry ? props.selectedCountry.name : props.countriesCode[0].name}
          showDropList={showDropList}
          setShowDropList={setShowDropList}

        />
        <DropListInput
          code={props.selectedCountry ? props.selectedCountry.dialCode : props.countriesCode[0].dialCode}
        />
      </div>
      {showDropList && < DropList
        countriesData={props.countriesCode}
        onChangeSelectedValue={props.onChangeSelectedValue}
        setShowDropList={setShowDropList}
        indexDropListClicked={props.selectedCountry ? props.countriesCode.indexOf(props.selectedCountry) : 0}
      />
      }
    </div>
  )
}

export default DropListFrom