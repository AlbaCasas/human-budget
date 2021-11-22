import Logo from "../Logo";
import Sidebar from "../Sidebar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout__content">
        <nav className="layout__nav">
          <Logo />
        </nav>
        <main>{props.children}</main>
      </div>
      <Sidebar
        className="layout__sidebar"
        setToastMessage={props.setToastMessage}
      />
    </div>
  );
};

export default Layout;
