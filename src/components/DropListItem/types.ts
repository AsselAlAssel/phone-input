export type DropListItemProps<T>={
    countryData:{
        name:string,
        flag:string,
        dialCode:string,
        isoCode:string
    }
    onChangeSelectedValue:(newSelectedCountry: T) => void,
    setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCountry:T|undefined
}