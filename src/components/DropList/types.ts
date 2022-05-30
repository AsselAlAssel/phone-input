
export type DropListProps<T> = {
  countriesData: T[];
  onChangeSelectedValue: (newSelectedCountry: T) => void
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
  indexDropListClicked: number;
};

export type AutoSizerFunPar={
  width:number,
  height:number
}

export type ListRowRenderer={
  key: number,
   index: number,
    style: Object 
}

