
  export type Props<T>={
    countriesCode:T[],
    selectedCountry:T | undefined,
    onChangeSelectedValue:(newSelectedCountry: T) => void
  }