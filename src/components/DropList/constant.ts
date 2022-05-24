import { dropListValueType } from "../assets/Constant";

export type Props = {
  countriesData: dropListValueType[];
  setDropListValue: React.Dispatch<
    React.SetStateAction<dropListValueType | undefined>
  >;
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
  indexDropListClicked: number;
};
