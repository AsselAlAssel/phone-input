import "./DropListButton.css"
import dropDown from "../assets/images/dropDown.svg"

const DropListButton = (props) => {
    return (
        <button onClick={() => { props.onChangeVisibilityOfDopList() }}
            className="form__dropListButton">
            <img src={props.data.flag} alt={`flag for ${Element.name} `} />
            <img src={dropDown} alt="" />
        </button>
    )

}

export default DropListButton;