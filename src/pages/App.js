import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import Button from "../components/Button/Button";

function App() {
  return (
    <div className="App">
      <Layout>
        <Button icon="plus" text="hola"/>
        <ExpenseCard title="Hola" date="12 de Octubre, 2021" amount="400$" />
      </Layout>
    </div>
  );
}

export default App;
