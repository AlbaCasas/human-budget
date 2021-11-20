import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
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
    }
  };
  return props.isShown === true ? (
    <Modal className="expense-modal" onCloseClick={props.onCloseClick}>
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
