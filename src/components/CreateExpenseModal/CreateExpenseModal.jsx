import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";

const CreateExpenseModal = () => {
    return <Modal>
        <Title>Add new expense</Title>
        <Input placeholder="Expense name"/>
    </Modal>
}

export default CreateExpenseModal;