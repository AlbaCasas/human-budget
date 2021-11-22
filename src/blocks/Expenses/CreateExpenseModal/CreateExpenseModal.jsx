import Modal from "../../../components/Modal";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import "./CreateExpenseModal.css";

const TITLE_NAME = "title";
const AMOUNT_NAME = "amount";

const CreateExpenseModal = (props) => {
  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    const titleValue = event.target[TITLE_NAME].value;
    const amountValue = event.target[AMOUNT_NAME].value;
    if (titleValue !== "" && amountValue !== "") {
      props.setExpenses([
        ...props.expenses,
        {
          title: titleValue,
          date: new Date().toISOString(),
          amount: amountValue,
          icon: "home",
        },
      ]);
      props.setToastMessage("Expense created successfully");
      props.onClose();
    }
  };
  return props.isShown === true ? (
    <Modal className="expense-modal" onCloseClick={props.onClose}>
      <Title>Add new expense</Title>
      <form className="expense-modal__form" onSubmit={handleExpenseSubmit}>
        <Input
          name={TITLE_NAME}
          className="expense-modal__input expense-modal__input--name"
          placeholder="Expense name"
        />
        <Input
          name={AMOUNT_NAME}
          className="expense-modal__input expense-modal__input--amount"
          placeholder="$ Amount"
          type="number"
        />
        <Button variant="default" icon="plus" />
      </form>
    </Modal>
  ) : null;
};

export default CreateExpenseModal;
