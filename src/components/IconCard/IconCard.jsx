import "./IconCard.css";
import Icon from "../Icon";

const getPath = (iconName) => {
    const walletPath = "M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z";
    const musicPath = "M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z";
    const homePath = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z";

    if (iconName === "wallet") {
        return walletPath;
    }
    if (iconName === "music") {
        return musicPath;
    }
    if (iconName === "home") {
        return homePath;
    }
    return null;
}

const IconCard = (props) => {
    return <div className="iconCard">
        <Icon className="iconCard__icon" path={getPath(props.icon)}/>
        <div>
            <p className="iconCard__title">{props.title}</p>
            <p className="iconCard__subtitle">{props.subtitle}</p>
        </div>
    </div>;
}

export default IconCard;