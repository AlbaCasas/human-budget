import Title from "../Title";
import Button from "../Button";
import "./Sidebar.css";
import ExpenseCard from "../ExpenseCard";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.className}`}>
      <div className="sidebar__heading">
        <Title>Incomes</Title>
        <Button
          onClick={() => {
            props.setIsIncomeModalShown(true);
          }}
          icon="plus"
          variant="default"
        />
      </div>
      {props.incomes.map((item) => {
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
