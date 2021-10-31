import Icon from "../Icon";
import "./Modal.css";

const Modal = (props) => {
    return <>
        <div className="backdrop" onClick={props.onCloseClick}/>
        <div className={`modal ${props.className}`}>
            <button onClick={props.onCloseClick} className="modal__close">
                <Icon icon="close"/> 
            </button> 
            {props.children}
        </div>
    </>
}

export default Modal;