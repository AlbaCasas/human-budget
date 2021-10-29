import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import Title from "../components/Title";
import Button from "../components/Button";
import TotalAmount from "../components/TotalAmount";
import moneySvg from "../assets/money.svg";
import spentSvg from "../assets/spent.svg";
import bankSvg from "../assets/bank.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <div className="app__header">
          <TotalAmount text="Amount left to spend" img={moneySvg}>600</TotalAmount>
          <TotalAmount text="Spent amount" img={spentSvg}>400</TotalAmount>
          <TotalAmount text="Original amount" img={bankSvg}>1000</TotalAmount>
        </div>
        <div className="app__cta">
          <Title>Expenses</Title>
          <Button icon="plus" variant="default" text="Add Expense"/>
        </div>
        <ExpenseCard title="Clothing" date="12 de Octubre, 2021" amount="400$" />
      </Layout>
    </div>
  );
}

export default App;
