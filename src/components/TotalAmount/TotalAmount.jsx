import "./TotalAmount.css";

const TotalAmount = (props) => {
    return <div className={`totalAmount ${props.className}`}>
        <img className="totalAmount__svg" alt="Wallet Icon" src={props.img} />
        <div className="totalAmount__content">
            <span className="totalAmount__amount">${props.children}</span>
            <span className="totalAmount__text">{props.text}</span>
        </div> 
    </div>
}

export default TotalAmount;