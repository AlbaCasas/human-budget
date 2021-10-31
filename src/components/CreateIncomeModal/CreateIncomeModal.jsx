import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Title from "../Title";
import "./CreateIncomeModal.css";

const CreateIncomeModal = (props) => {
    return props.isShown === true ? (
        <Modal onCloseClick={props.onCloseClick} className="income-modal">
            <Title>Add income</Title>
            <div className="income-modal__form">
                <Input className="income-modal__input income-modal__input--name" placeholder="income name"/>
                <Input className="income-modal__input income-modal__input--amount" placeholder="$ Amount" type="number"/>
                <Button variant="default" icon="plus"/>
            </div>
        </Modal>
    ) : null;
}

export default CreateIncomeModal;