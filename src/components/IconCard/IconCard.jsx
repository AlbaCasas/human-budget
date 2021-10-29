import "./IconCard.css";
import Icon from "../Icon";

const IconCard = (props) => {
    return <div className="iconCard">
        <Icon className="iconCard__icon" icon={props.icon}/>
        <div>
            <p className="iconCard__title">{props.title}</p>
            <p className="iconCard__subtitle">{props.subtitle}</p>
        </div>
    </div>;
}

export default IconCard;
