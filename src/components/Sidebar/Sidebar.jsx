import Title from "../Title";
import Button from "../Button";
import "./Sidebar.css";

const Sidebar = (props) => {
    return <aside className={`sidebar ${props.className}`}>
        <div className="sidebar__heading">
            <Title>Incomes</Title>
            <Button icon="plus" variant="default"/>
        </div>
    </aside>;
}

export default Sidebar;