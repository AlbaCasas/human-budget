import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.className}`}>{props.children}</aside>
  );
};

export const SidebarHeading = (props) => {
  return <div className="sidebar__heading">{props.children}</div>;
};

export default Sidebar;
