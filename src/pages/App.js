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
import Sidebar from "../components/Sidebar";
import { SidebarHeading } from "../components/Sidebar/Sidebar";
import ExpenseCard from "../components/ExpenseCard";
import { LayoutContent, LayoutNav } from "../components/Layout/Layout";
import Title from "../components/Title";
import Button from "../components/Button";

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
        <LayoutContent>
          <LayoutNav />
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
        </LayoutContent>
        <Sidebar>
          <SidebarHeading>
            <Title>Incomes</Title>
            <Button
              onClick={() => setIsIncomeModalShown(true)}
              icon="plus"
              variant="default"
            />
          </SidebarHeading>
          {incomes.map((item) => {
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
        </Sidebar>
      </Layout>
    </div>
  );
};

export default App;
