import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import useFetchData from '../CustomHook/usefetch';
import { dropListValueType } from '../assets/Constant';
import { URL } from './constant';



const DropListFrom: React.VFC = () => {
  const { data: countriesCode, loading, hasError } = useFetchData<dropListValueType>(URL);
  const [dropListValue, setDropListValue] = useState<dropListValueType>();
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


  if (loading) {
    return <h2 className="container__status">LOADING...</h2>
  } else if (hasError) {
    return <h2 className="container__status error">There an error...</h2>
  }

  return (
    <div className='dropListContainer' onSubmit={event => event.preventDefault()}>
      <div className='dropListContainer__ButtonAndInput'>
        <DropListButton
          flag={dropListValue ? dropListValue.flag : countriesCode[0].flag}
          name={dropListValue ? dropListValue.name : countriesCode[0].name}
          showDropList={showDropList}
          setShowDropList={setShowDropList}

        />
        <DropListInput
          code={dropListValue ? dropListValue.dialCode : countriesCode[0].dialCode}
        />
      </div>
      {showDropList && < DropList
        countriesData={countriesCode}
        setDropListValue={setDropListValue}
        setShowDropList={setShowDropList}
        indexDropListClicked={dropListValue ? countriesCode.indexOf(dropListValue) : 0}
      />
      }
    </div>
  )
}

export default DropListFrom