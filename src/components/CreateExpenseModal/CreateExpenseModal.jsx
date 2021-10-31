import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import "./CreateExpenseModal.css";

const CreateExpenseModal = (props) => {
    return props.isShown === true ? (
        <Modal className="expense-modal">
            <Title>Add new expense</Title>
            <div className="expense-modal__form">
                <Input className="expense-modal__input expense-modal__input--name" placeholder="Expense name"/>
                <Input className="expense-modal__input expense-modal__input--amount" placeholder="$ Amount" type="number"/>
                <Button variant="default" icon="plus"/>
            </div>
        </Modal>
    ) : null;
}

export default CreateExpenseModal;