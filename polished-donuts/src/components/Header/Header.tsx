import { ReactElement } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

const Header = (): ReactElement => {
    return (
        <header className="header">
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
        </header>
    )
}

export default Header;