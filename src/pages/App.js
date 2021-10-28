import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";

function App() {
  return (
    <div className="App">
      <Layout>
        <ExpenseCard title="Hola" date="12 de Octubre, 2021" amount="400$" />
      </Layout>
    </div>
  );
}

export default App;
