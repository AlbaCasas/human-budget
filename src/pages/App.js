import { useState } from "react";
import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import Title from "../components/Title";
import Button from "../components/Button";
import Toast from "../components/Toast/Toast";
import TotalAmount from "../components/TotalAmount";
import CreateExpenseModal from "../components/CreateExpenseModal";
import CreateIncomeModal from "../components/CreateIncomeModal";
import moneySvg from "../assets/money.svg";
import spentSvg from "../assets/spent.svg";
import bankSvg from "../assets/bank.svg";
import "./App.css";

const App = () => {
  const [isExpenseModalShown, setIsExpenseModalShown] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [incomes, setIncomes] = useState([]);

  return (
    <div className="app">
      {toastMessage !== null && <Toast>{toastMessage}</Toast>}
      <CreateIncomeModal
        setToastMessage={setToastMessage}
        setIncomes={setIncomes}
        incomes={incomes}
        onClose={() => {
          setIsIncomeModalShown(false);
        }}
        isShown={isIncomeModalShown}
      />
      <CreateExpenseModal
        setExpenses={setExpenses}
        expenses={expenses}
        onClose={() => {
          setIsExpenseModalShown(false);
        }}
        isShown={isExpenseModalShown}
        setToastMessage={setToastMessage}
      />
      <Layout incomes={incomes} setIsIncomeModalShown={setIsIncomeModalShown}>
        <div className="app__header">
          <TotalAmount text="Amount left to spend" img={moneySvg}>
            600
          </TotalAmount>
          <TotalAmount text="Spent amount" img={spentSvg}>
            400
          </TotalAmount>
          <TotalAmount text="Original amount" img={bankSvg}>
            1000
          </TotalAmount>
        </div>
        <div className="app__cta">
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
      </Layout>
    </div>
  );
};

export default App;
