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
                <div className="sign-up__name-container">
                    <div className="sign-up__input">
                        <label htmlFor="first_name" className="sign-up__label">First name</label>
                        <input 
                            name="first_name" 
                            type="text" 
                            id="first_name" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__input">
                        <label htmlFor="last_name" className="sign-up__label">Last name</label>
                        <input 
                            name="last_name" 
                            type="text" 
                            id="last_name" 
                            className="form-field"
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SignUpPage;