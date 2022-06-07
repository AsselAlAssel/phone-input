
export type DropListProps<T> = {
  countriesData: T[];
  onChangeSelectedValue: (newSelectedCountry: T) => void
  onChangeShowDropListValue:  (value: boolean) => void;
  selectedCountry:T|undefined,
  hasError:boolean
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

