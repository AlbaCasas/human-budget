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
        setIsIncomeModalShown={props.setIsIncomeModalShown}
        incomes={props.incomes}
      />
    </div>
  );
};

export default Layout;
