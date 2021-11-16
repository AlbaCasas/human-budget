import { useState } from "react";
import Title from "../Title";
import Button from "../Button";
import CreateIncomeModal from "../CreateIncomeModal/";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  return (
    <aside className={`sidebar ${props.className}`}>
      <CreateIncomeModal
        onCloseClick={() => {
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
    </aside>
  );
};

export default Sidebar;
