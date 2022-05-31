
  export type DropListContainerProps<T>={
    countriesCode:T[],
    selectedCountry:T | undefined,
    onChangeSelectedValue:(newSelectedCountry: T) => void,
    loading:boolean,
    hasError:boolean
  }