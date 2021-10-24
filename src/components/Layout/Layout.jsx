import "./Layout.css";
import Logo from "../Logo";

const Layout = (props) => {
    return (
        <div className="layout">
            <Logo />
            {props.children}
        </div>
    )
}

export default Layout;