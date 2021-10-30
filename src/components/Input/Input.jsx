import "./Input.css";

const Input = (props) => {
    return <input type={props.type} className="input" placeholder={props.placeholder}/>
}

export default Input;