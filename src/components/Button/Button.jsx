import Icon from "../Icon/Icon";
import getPath from "./utils";

const Button = (props) => {
    return <button>
        {props.text}
        <Icon path={getPath(props.icon)} />
    </button>
}

export default Button;

