import Modal from "../Modal";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import "./CreateExpenseModal.css";

const CreateExpenseModal = (props) => {
  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    const titleValue = event.target["title"].value;
    const amountValue = event.target["amount"].value;
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
          name="title"
          className="expense-modal__input expense-modal__input--name"
          placeholder="Expense name"
        />
        <Input
          name="amount"
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
