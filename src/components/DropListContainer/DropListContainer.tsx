import React, { useState } from 'react';
import DropList from '../DropList/DropList';
import DropListButton from '../DropListButton/DropListButton';
import "./DropListContainer.css";
import DropListInput from '../DropListInput/DropListInput';
import useFetchData from '../CustomHook/usefetch';
import { dropListValueType } from './constant';


const url="https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/3d54c1a6869e2bf35f729881ef85af3f22c74fad/countries.json";

const DropListFrom:React.FC = () => {
    const { data: countriesCode, loading, hasError } = useFetchData(url);
    const [dropListValue, setDropListValue] = useState<dropListValueType>();
    const [showDropList, setShowDropList] = useState<boolean>(false);

    if (loading) {
        return <h2 className="container__status">LOADING...</h2>
    } else if (hasError) {
        return <h2 className="container__status error">There an error...</h2>
    }

  return(
      <div className='dropListContainer' onSubmit={event=>event.preventDefault()}>
          <div className='dropListContainer__ButtonAndInput'>
        <DropListButton
          flag={dropListValue ? dropListValue.flag : countriesCode[0].flag}
          name={dropListValue ? dropListValue.name : countriesCode[0].name}
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
            />
            }
      </div>
  )
}

export default DropListFrom