import Icon from "../Icon";
import "./ExpenseCard.css";

const ExpenseCard = (props) => {
    return <div className="expense">
        {props.icon ? <div className={`expense__color expense__color--${props.color}`}>
            <Icon icon={props.icon}/>
        </div> : null}
        <div className="expense__left">
            <p className="expense__text--bold">{props.title}</p>
            <p className="expense__text--regular expense__date">{props.date}</p>
        </div>
        <p className="expense__text--bold">{props.amount}</p>
    </div>;
}

export default ExpenseCard;
