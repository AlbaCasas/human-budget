import { useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ExpenseCard from "./ExpenseCard";
import CreateExpenseModal from "./CreateExpenseModal";
import "./Expenses.css";

const Expenses = (props) => {
  const [isExpenseModalShown, setIsExpenseModalShown] = useState(false);
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <CreateExpenseModal
        setExpenses={setExpenses}
        expenses={expenses}
        onClose={() => {
          setIsExpenseModalShown(false);
        }}
        isShown={isExpenseModalShown}
        setToastMessage={props.setToastMessage}
      />
      <div className="expenses__heading">
        <Title>Expenses</Title>
        <Button
          onClick={() => {
            setIsExpenseModalShown(true);
          }}
          icon="plus"
          variant="default"
        >
          Add Expense
        </Button>
      </div>
      {expenses.map((item) => {
        return (
          <ExpenseCard
            title={item.title}
            date={item.date}
            amount={item.amount}
            icon={item.icon}
            color={item.color}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
