import Icon from "../Icon";
import getPath, { getClassName } from "./utils";
import "./Button.css";

const Button = (props) => {
    return <button className={getClassName(props.variant)}>
        {props.text}
        <Icon path={getPath(props.icon)} />
    </button>
}

export default Button;
