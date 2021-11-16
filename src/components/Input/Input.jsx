import "./Input.css";

const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className={`input ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
