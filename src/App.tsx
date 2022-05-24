import React, { useState } from "react";
import { dropListValueType } from "./components/assets/Constant";
import useFetchData from "./components/CustomHook/usefetch";
import { URL } from "./components/assets/Constant";
import DropListContainer from "./components/DropListContainer/DropListContainer";

const App: React.VFC = () => {

  const { data: countriesCode, loading, hasError } = useFetchData<dropListValueType>(URL);
  const [selectedCountry, setSelectedCountry] = useState<dropListValueType>();

  const changeSelectedValue=(newCountrySelected:dropListValueType)=>{
    setSelectedCountry(newCountrySelected);
  }

  if (loading) {
    return <h2 className="container__status">LOADING...</h2>
  } else if (hasError) {
    return <h2 className="container__status error">There an error...</h2>
  }

  return <DropListContainer
  countriesCode={countriesCode}
  selectedCountry={selectedCountry}
  onChangeSelectedValue={changeSelectedValue}
   />;
};
export default App;
