import "./Footer.scss";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <Link to="https://www.facebook.com/" className="footer__link">
                <img src={facebookIcon} alt="facebook logo" className="footer__icon"/>
            </Link>
            <Link to="https://www.instagram.com/" className="footer__link">
                <img src={instagramIcon} alt="instagram logo" className="footer__icon"/>
            </Link>
            <Link to="https://twitter.com/" className="footer__link">
                <img src={twitterIcon} alt="twitter logo" className="footer__icon"/>
            </Link>
        </footer>
    )
}

export default Footer;