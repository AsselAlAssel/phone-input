import { OverridableClasses } from "../types/types"
export type DropListContainerProps<T> = {
  countriesCode: T[],
  selectedCountry: T | undefined,
  onChangeSelectedValue: (newSelectedCountry: T) => void,
  hasError: boolean,
  helperText: string,
  classes: Partial<Record<OverridableClasses, string>>
}

