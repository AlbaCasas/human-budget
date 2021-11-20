import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Title from "../Title";
import "./CreateIncomeModal.css";

const CreateIncomeModal = (props) => {
  const handleIncomeSubmit = (event) => {
    event.preventDefault();
    const titleValue = event.target["title"].value;
    const amountValue = event.target["amount"].value;
    if (titleValue !== "" && amountValue !== "") {
      props.setIncomes([
        ...props.incomes,
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
    <Modal onCloseClick={props.onCloseClick} className="income-modal">
      <Title>Add income</Title>
      <form className="income-modal__form" onSubmit={handleIncomeSubmit}>
        <Input
          name="title"
          className="income-modal__input income-modal__input--name"
          placeholder="income name"
        />
        <Input
          name="amount"
          className="income-modal__input income-modal__input--amount"
          placeholder="$ Amount"
          type="number"
        />
        <Button variant="default" icon="plus" />
      </form>
    </Modal>
  ) : null;
};

export default CreateIncomeModal;
