import { useState } from "react";
import Title from "../Title";
import Button from "../Button";
import CreateIncomeModal from "../CreateIncomeModal/";
import "./Sidebar.css";
import ExpenseCard from "../ExpenseCard";

const Sidebar = (props) => {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [incomes, setIncomes] = useState([]);
  return (
    <aside className={`sidebar ${props.className}`}>
      <CreateIncomeModal
        setToastMessage={props.setToastMessage}
        setIncomes={setIncomes}
        incomes={incomes}
        onClose={() => {
          setIsIncomeModalShown(false);
        }}
        isShown={isIncomeModalShown}
      />
      <div className="sidebar__heading">
        <Title>Incomes</Title>
        <Button
          onClick={() => {
            setIsIncomeModalShown(true);
          }}
          icon="plus"
          variant="default"
        />
      </div>
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
    </aside>
  );
};

export default Sidebar;
