import React, { useState } from "react";
import { dropListValueType } from "./components/types/types";
import useFetchData from "./components/CustomHook/usefetch";
import { URL } from "./components/constant/Constant";
import DropListContainer from "./components/DropListContainer/DropListContainer";

const App: React.VFC = () => {

  const { data: countriesCode, loading, hasError } = useFetchData<dropListValueType>(URL);
  console.log(countriesCode, loading,hasError);
  const [selectedCountry, setSelectedCountry] = useState<dropListValueType>();

  const handelSelectedValueChange = (newCountrySelected: dropListValueType) => {
    setSelectedCountry(newCountrySelected);
  }
  return <DropListContainer
    countriesCode={countriesCode}
    selectedCountry={selectedCountry}
    onChangeSelectedValue={handelSelectedValueChange}
    loading={loading}
    hasError={hasError}
  />;
};
export default App;
