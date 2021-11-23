import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import Button from "../../components/Button";
import IncomeCard from "./IncomeCard";
import CreateIncomeModal from "./CreateIncomeModal";
import { SidebarHeading } from "../../components/Sidebar/Sidebar";

const Incomes = (props) => {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [incomes, setIncomes] = useState([]);
  return (
    <div>
      <CreateIncomeModal
        setToastMessage={props.setToastMessage}
        setIncomes={setIncomes}
        incomes={incomes}
        onClose={() => {
          setIsIncomeModalShown(false);
        }}
        isShown={isIncomeModalShown}
      />
      <Sidebar>
        <SidebarHeading>
          <Title>Incomes</Title>
          <Button
            onClick={() => setIsIncomeModalShown(true)}
            icon="plus"
            variant="icon"
          />
        </SidebarHeading>
        {incomes.map((item) => {
          return (
            <IncomeCard
              title={item.title}
              date={item.date}
              amount={item.amount}
              icon={item.icon}
              color={item.color}
            />
          );
        })}
      </Sidebar>
    </div>
  );
};

export default Incomes;
