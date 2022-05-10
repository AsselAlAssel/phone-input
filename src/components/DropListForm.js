import React, { useState } from "react";
import DropList from "./DropList";
import DropListButton from "./DropListButton";
import "./DropListForm.css"
import DropListInput from "./DropListInput";
import useFetchData from "./use-fetch";
const url = "https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/3d54c1a6869e2bf35f729881ef85af3f22c74fad/countries.json";

const DropListForm = () => {
    const { data: countriesCode, loading, hasError } = useFetchData(url);
    const [dropListValue, setDropListValue] = useState("");
    const [showDropList, setShowDropList] = useState(false);


    const changeVisibilityOfDopList = () => {
        setShowDropList(prevValue => !prevValue);
    }
    const ChangeDropListValue = (newDropListValue) => {
        setDropListValue(newDropListValue);
    }

    if (loading) {
        return <h2 className="container__status">LOADING...</h2>
    } else if (hasError) {
        return <h2 className="container__status error">There an error...</h2>
    }

    return (
        <form className="container__dropListForm"
            onSubmit={event => event.preventDefault()}>

            <div className="dropListForm__buttonAndInput">
                <DropListButton
                    data={countriesCode[0]}
                    onChangeVisibilityOfDopList={changeVisibilityOfDopList}
                    showDropList={showDropList}
                />
                <DropListInput
                    code={dropListValue.dialCode}
                />
            </div>

            {showDropList && < DropList
                countriesData={countriesCode}
                onChangeDropListValue={ChangeDropListValue}
                onClickOnAnyDropListItem={changeVisibilityOfDopList}
            />
            }
        </form>
    )

}

export default DropListForm;