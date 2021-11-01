import Icon from "../Icon";
import "./Toast.css";

const Toast = (props) => {
    return <div className="toast">
        <Icon className="toast__icon" icon="close" />
        <button onClick={props.onClose} className="toast__close">
            <Icon icon="close" />
        </button>
        <span>{props.text}</span>
    </div>
}

export default Toast;