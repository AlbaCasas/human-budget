import Icon from "../Icon";
import "./Modal.css";

const Modal = (props) => {
    return <>
        <div className="backdrop"/>
        <div className="modal">
            <button className="modal__close">
                <Icon icon="close"/> 
            </button> 
            {props.children}
        </div>
    </>
}

export default Modal;