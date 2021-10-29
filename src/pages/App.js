import Layout from "../components/Layout";
import ExpenseCard from "../components/ExpenseCard";
import IconCard from "../components/IconCard/";

function App() {
  return (
    <div className="App">
      <Layout>
        <ExpenseCard title="Hola" date="12 de Octubre, 2021" amount="400$" />
        <IconCard title="Home Wallet" subtitle="$1000,00"/>
      </Layout>
    </div>
  );
}

export default App;
