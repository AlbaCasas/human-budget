import "./ExpenseCard.css";

const ExpenseCard = (props) => {
    return <div className="expense">
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.amount}</p>
    </div>;
}

export default ExpenseCard;
