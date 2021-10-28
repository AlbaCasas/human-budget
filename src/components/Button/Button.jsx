import Icon from "../Icon/Icon";

const Button = (props) => {
    const pathPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
    const pathClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
    return <button>
        {props.text}
        {props.icon==="plus"?<Icon path={pathPlus}/>:null}
        {props.icon==="close"?<Icon path={pathClose}/>:null}
    </button>
}

export default Button;

