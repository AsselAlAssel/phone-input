import "./DropList.css"

const DropList = (props) => {

    const handelDropListItemClick = (event) => {
        const index = event.target.getAttribute("data-index");
        props.onChangeDropListValue(props.countriesData[index]);
        props.onClickOnAnyDropListItem();
    }

    const List = props.countriesData.map((element, index) => {
        return (
            <p key={element.name} data-index={index} onClick={handelDropListItemClick}>
                <img src={element.flag} alt={`flag for ${Element.name}`} />
                <span>  {element.name}</span>
                <span>  {element.dialCode}</span>

            </p>
        )
    })
    return <div className="dropListForm__DropList">{List}</div>


}

export default DropList;