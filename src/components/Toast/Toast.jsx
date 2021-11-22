import "./Toast.css";

const Toast = (props) => {
  return <div className="toast">{props.children}</div>;
};

export default Toast;
