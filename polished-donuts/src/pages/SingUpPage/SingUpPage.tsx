import "./SignUpPage.scss";
import bigStarTop from "../../assets/sing-up-animation-elements/Big-star-top.png";
import mediumStarTop from "../../assets/sing-up-animation-elements/Medium-star-top.png";
import smallStarTop from "../../assets/sing-up-animation-elements/Small-star-top.png";
import background from "../../assets/sing-up-animation-elements/Background-sing-up.svg";
import cherry from "../../assets/sing-up-animation-elements/cherry.png";
import donut from "../../assets/sing-up-animation-elements/donut-chocolate.png";
import chocolate from "../../assets/sing-up-animation-elements/Chocolate bar.png";
import bigStarBottom from "../../assets/sing-up-animation-elements/Big-star-bottom.png";
import mediumStarBottom from "../../assets/sing-up-animation-elements/Medium-star-bottom.png";
import smallStarBottom from "../../assets/sing-up-animation-elements/Small-star-bottom.png";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from "react-router-dom";



const SignUpPage = () => {
    return (
        <section className="sign-up">
            <div className="sign-up__animation-wrapper">
                <img src={bigStarTop} alt="star" className="sign-up__big-star-top"/>
                <img src={mediumStarTop} alt="star" className="sign-up__medium-star-top"/>
                <img src={smallStarTop} alt="star" className="sign-up__small-star-top"/>
                <img src={background} alt="background" className="sign-up__background"/>
                <img src={chocolate} alt="bag" className="sign-up__chocolate"/>
                <img src={cherry} alt="cherry" className="sign-up__cherry"/>
                <img src={donut} alt="donut" className="sign-up__donut"/>
                <img src={bigStarBottom} alt="star" className="sign-up__big-star-bottom"/>
                <img src={mediumStarBottom} alt="star" className="sign-up__medium-star-bottom"/>
                <img src={smallStarBottom} alt="star" className="sign-up__small-star-bottom"/>
            </div>
            <form className="sign-up__form">
                <h2 className="sign-up__title subtitle">Create an account</h2>
                <p className="sign-up__paragraph paragraph-small">Already have an account? 
                    <Link to="/log_in" className="sign-up__link link">
                        <span className="span"> Log in.</span>
                    </Link>
                </p>
                <div className="sign-up__name-container">
                    <div className="sign-up__input input">
                        <label htmlFor="first_name" className="sign-up__label paragraph-small">First name</label>
                        <input 
                            name="first_name" 
                            type="text" 
                            id="first_name" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__input input">
                        <label htmlFor="last_name" className="sign-up__label paragraph-small">Last name</label>
                        <input 
                            name="last_name" 
                            type="text" 
                            id="last_name" 
                            className="form-field"
                        />
                    </div>
                </div>
                <div className="sign-up__input input">
                    <label htmlFor="email" className="sign-up__label paragraph-small">Email</label>
                    <input 
                        name="email" 
                        type="text" 
                        id="email" 
                        className="form-field"
                    />
                </div>
                <div className="sign-up__input input">
                    <label htmlFor="password" className="sign-up__label paragraph-small">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        id="password" 
                        className="form-field"
                    />
                </div>
                <div className="sign-up__buttons">
                    <Link to="/" className="sign-up__link link">
                        <div className="sign-up__back-container">
                            <img src={backArrow} alt="back arrow" className="sign-up__back-arrow"/>
                            <p className="sign-up__back label">Back</p>
                        </div>
                    </Link>
                    <div className="sign-up__button-shadow button-shadow">
                        <button className="sign-up__button button label">
                            Sign up!
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SignUpPage;