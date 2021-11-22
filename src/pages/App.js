import { useState } from "react";
import Layout from "../components/Layout";
import Toast from "../components/Toast/Toast";
import TotalAmount from "../components/TotalAmount";
import CreateIncomeModal from "../components/CreateIncomeModal";
import moneySvg from "../assets/money.svg";
import spentSvg from "../assets/spent.svg";
import bankSvg from "../assets/bank.svg";
import "./App.css";
import Expenses from "../blocks/Expenses";

const App = () => {
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
        <Expenses setToastMessage={setToastMessage} />
      </Layout>
    </div>
  );
};

export default App;
