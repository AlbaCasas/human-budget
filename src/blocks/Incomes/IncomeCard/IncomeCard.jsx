import Icon from "../../../components/Icon";
import "./IncomeCard.css";

const IncomeCard = (props) => {
  return (
    <div className="incomes">
      {props.icon ? (
        <div className={`incomes__color incomes__color--${props.color}`}>
          <Icon icon={props.icon} />
        </div>
      ) : null}
      <div className="incomes__left">
        <p className="incomes__text--bold">{props.title}</p>
        <p className="incomes__text--regular incomes__date">{props.date}</p>
      </div>
      <p className="incomes__text--bold">{props.amount}</p>
    </div>
  );
};

export default IncomeCard;
