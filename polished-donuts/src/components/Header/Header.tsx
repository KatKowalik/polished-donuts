import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__nav-wrapper">
                <Link to="/" className="header__link">
                    <h4 className="header__logo">Polished Donuts!</h4>
                </Link>
                <ul className="header__nav">
                    <NavLink to="/" className="header__link nav-tab">
                        <li className="header__item">Home</li>
                    </NavLink>
                    <NavLink to="/products" className="header__link nav-tab">
                        <li className="header__item ">Products</li>
                    </NavLink>
                </ul>
            </div>
            <div className="header__nav-buttons">
                <Link to="/log_in">
                    <button className="header__login-button nav-button">Log in!</button>
                </Link>
                <Link to="/sign_up">
                    <button className="header__signup-button nav-button">Sign up!</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;