import Icon from "../Icon";
import { getClassName } from "./utils";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${getClassName(props.variant)} ${props.className}`}
    >
      {props.children}
      {props.icon !== undefined && <Icon icon={props.icon} />}
    </button>
  );
};

export default Button;
