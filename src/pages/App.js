import { useState } from "react";
import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import Title from "../components/Title";
import Button from "../components/Button";
import TotalAmount from "../components/TotalAmount";
import CreateExpenseModal from "../components/CreateExpenseModal";
import Toast from "../components/Toast";
import moneySvg from "../assets/money.svg";
import spentSvg from "../assets/spent.svg";
import bankSvg from "../assets/bank.svg";
import "./App.css";

function App() {
  const [isExpenseModalShown, setIsExpenseModalShown] = useState(false);
  return (
    <div className="app">
      <Toast text="hola"/>
      <CreateExpenseModal onCloseClick={() => {
        setIsExpenseModalShown(false);
      }} isShown={isExpenseModalShown}/>
      <Layout>
        <div className="app__header">
          <TotalAmount text="Amount left to spend" img={moneySvg}>600</TotalAmount>
          <TotalAmount text="Spent amount" img={spentSvg}>400</TotalAmount>
          <TotalAmount text="Original amount" img={bankSvg}>1000</TotalAmount>
        </div>
        <div className="app__cta">
          <Title>Expenses</Title>
          <Button onClick={() => {
              setIsExpenseModalShown(true);
            }} icon="plus" variant="default">Add Expense</Button>
        </div>
        <ExpenseCard title="Spotify" date="12 de Octubre, 2021" amount="-10.00$" icon="music" color="blue"/>
        <ExpenseCard title="Home" date="12 de Octubre, 2021" amount="-150.00$" icon="home" color="green"/>
        <ExpenseCard title="Food" date="12 de Octubre, 2021" amount="-200.00$" icon="wallet" color="yellow"/>
        <ExpenseCard title="Clothing" date="12 de Octubre, 2021" amount="-40.00$" icon="shopping" color="gray"/>
      </Layout>
    </div>
  );
}

export default App;
