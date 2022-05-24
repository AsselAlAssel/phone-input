import { dropListValueType } from "../assets/Constant";

export type Props<T> = {
  countriesData: T[];
  onChangeSelectedValue: (newSelectedCountry:T)=>void
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
  indexDropListClicked: number;
};
