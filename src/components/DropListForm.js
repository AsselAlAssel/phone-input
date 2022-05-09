import React, { Fragment, useEffect, useState } from "react";
import DropList from "./DropList";
import DropListButton from "./DropListButton";
import "./DropListForm.css"
import DropListInput from "./DropListInput";

const url = "https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/3d54c1a6869e2bf35f729881ef85af3f22c74fad/countries.json";

const DropListForm = () => {
    const [countriesCode, setCountriesCode] = useState([]);
    const [dropListValue, setDropListValue] = useState("");
    const [showDropList, setShowDropList] = useState(false);


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountriesCode(data)
                setDropListValue(data[0])
            })
            .catch(err => console.error(err));

    }, []);

    const changeVisibilityOfDopList = () => {
        setShowDropList(prevValue => !prevValue);
    }
    const ChangeDropListValue = (newDropListValue) => {
        setDropListValue(newDropListValue);
    }

    if (setCountriesCode === []) {
        return <h2>loading</h2>
    }

    return (
        <form className="container__dropListForm"
            onSubmit={event => event.preventDefault()}>

            <div className="dropListForm__buttonAndInput">
                <DropListButton
                    data={dropListValue}
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