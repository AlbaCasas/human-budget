import "./ExpenseCard.css";

const ExpenseCard = (props) => {
    return <div className="expense">
        <div className="expense__color"/>
        <div className="expense__left">
            <p className="expense__text--bold">{props.title}</p>
            <p className="expense__text--regular expense__date">{props.date}</p>
        </div>
        <p className="expense__text--bold">{props.amount}</p>
    </div>;
}

export default ExpenseCard;
