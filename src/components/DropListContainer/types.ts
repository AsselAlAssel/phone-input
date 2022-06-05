
type OverridableClasses = "dropListContainer" | "divForInputAndButton"

export type DropListContainerProps<T> = {
  countriesCode: T[],
  selectedCountry: T | undefined,
  onChangeSelectedValue: (newSelectedCountry: T) => void,
  hasError: boolean,
  helperText: string,
  classes: Partial<Record<OverridableClasses, string>>
}

