import Icon from "../Icon";
import { getClassName } from "./utils";
import "./Button.css";

const Button = (props) => {
    return <button className={`${getClassName(props.variant)} ${props.className}`}>
        {props.children}
        <Icon icon={props.icon} />
    </button>
}

export default Button;
