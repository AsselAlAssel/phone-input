export type DropListItemProps<T> = {
    countryData: {
        name: string,
        flag: string,
        dialCode: string,
        isoCode: string
    }
    onChangeSelectedValue: (newSelectedCountry: T) => void,
    selectedCountry: T | undefined
}