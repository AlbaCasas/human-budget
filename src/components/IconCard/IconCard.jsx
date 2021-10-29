import "./IconCard.css";
const IconCard = (props) => {
    return <div className="iconCard">
        <p className="iconCard__title">{props.title}</p>
        <p className="iconCard__subtitle">{props.subtitle}</p>
    </div>;
}

export default IconCard;