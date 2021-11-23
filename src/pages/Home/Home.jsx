import { useState } from "react";
import Layout from "../../components/Layout";
import Toast from "../../components/Toast/Toast";
import TotalAmount from "../../components/TotalAmount";
import moneySvg from "../../assets/money.svg";
import spentSvg from "../../assets/spent.svg";
import bankSvg from "../../assets/bank.svg";
import "./Home.css";
import Expenses from "../../blocks/Expenses";
import { LayoutContent, LayoutNav } from "../../components/Layout/Layout";
import Incomes from "../../blocks/Incomes";

const Home = () => {
  const [toastMessage, setToastMessage] = useState(null);

  return (
    <div className="home">
      {toastMessage !== null && <Toast>{toastMessage}</Toast>}
      <Layout>
        <LayoutContent>
          <LayoutNav />
          <div className="home__header">
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
        </LayoutContent>
        <Incomes setToastMessage={setToastMessage} />
      </Layout>
    </div>
  );
};

export default Home;
