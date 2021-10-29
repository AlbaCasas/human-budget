import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import Title from "../components/Title";
import Button from "../components/Button";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <div className="app__heading">
          <Title>Expenses</Title>
          <Button icon="plus" variant="default" text="Add Expense"/>
        </div>
        <ExpenseCard title="Hola" date="12 de Octubre, 2021" amount="400$" />
      </Layout>
    </div>
  );
}

export default App;
