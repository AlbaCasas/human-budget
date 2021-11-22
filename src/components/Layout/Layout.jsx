import Logo from "../Logo";
import "./Layout.css";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export const LayoutContent = (props) => {
  return <div className="layout__content">{props.children}</div>;
};

export const LayoutNav = () => {
  return (
    <nav className="layout__nav">
      <Logo />
    </nav>
  );
};

export default Layout;
