import React, { useState } from "react";
import { dropListValueType } from "./components/types/types";
import countriesData from './components/constant/countries.json'
import DropListContainer from "./components/DropListContainer/DropListContainer";

const App: React.VFC = () => {
  const [selectedCountry, setSelectedCountry] = useState<dropListValueType>();
  const [hasError, setHasError] = useState(false);
  const [helperText, setHelperText] = useState("input invalid");

  const handelSelectedValueChange = (newCountrySelected: dropListValueType) => {
    setSelectedCountry(newCountrySelected);
  }
  return <DropListContainer
    countriesCode={countriesData}
    selectedCountry={selectedCountry}
    onChangeSelectedValue={handelSelectedValueChange}
    hasError={hasError}
    helperText={"invalid input"}
    classes={{
    }}

  />;
};
export default App;
