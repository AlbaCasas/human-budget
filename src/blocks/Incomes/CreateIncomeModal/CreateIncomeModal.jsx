import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import "./CreateIncomeModal.css";

const TITLE_NAME = "title";
const AMOUNT_NAME = "amount";

const CreateIncomeModal = (props) => {
  const handleIncomeSubmit = (event) => {
    event.preventDefault();
    const titleValue = event.target[TITLE_NAME].value;
    const amountValue = event.target[AMOUNT_NAME].value;
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
      props.setToastMessage("Income created sucessfully");
      props.onClose();
    }
  };
  return props.isShown === true ? (
    <Modal onCloseClick={props.onClose} className="income-modal">
      <Title>Add income</Title>
      <form className="income-modal__form" onSubmit={handleIncomeSubmit}>
        <Input
          name={TITLE_NAME}
          className="income-modal__input income-modal__input--name"
          placeholder="income name"
        />
        <Input
          name={AMOUNT_NAME}
          className="income-modal__input income-modal__input--amount"
          placeholder="$ Amount"
          type="number"
        />
        <Button variant="icon" icon="plus" />
      </form>
    </Modal>
  ) : null;
};

export default CreateIncomeModal;
