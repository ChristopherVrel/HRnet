import "./Nav.css";

const Nav = ({ children }) => {
    return (
        <div className="nav">
            <div className="nav-content">
                {children}
            </div>
        </div>
    );
}

export default Nav;