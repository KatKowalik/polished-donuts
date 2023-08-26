import "./LogInPage.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow.svg";
import largeStar from "../../assets/animation-elements/Big-star-top.png";
import mediumStar from "../../assets/animation-elements/Medium-star-top.png";
import smallStar from "../../assets/animation-elements/Small-star-top.png";
import background from "../../assets/animation-elements/login-background.png";
import donut from "../../assets/animation-elements/rose-hip-donut.png";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import axios from "axios";



const LogInPage = () => {
    const navigate = useNavigate();
    const [activeUser, setActiveUser] = useState({
        email: "",
        password: ""
    });

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:8080/users/login", activeUser)
        .then((response) => {
            navigate("/");
        })
        .catch((error) => {
            console.error("Cannot log in the user", error);
        }); 
     }

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setActiveUser({ ...activeUser, [e.target.name]: e.target.value});
    }
    return(
        <section className="log-in">
            <div className="log-in__animation">
                <img src={largeStar} alt="large star" className="log-in__large-star-top"/>
                <img src={mediumStar} alt="large star" className="log-in__medium-star-top"/>
                <img src={smallStar} alt="large star" className="log-in__small-star-top"/>
                <img src={background} alt="large star" className="log-in__background"/>
                <img src={donut} alt="large star" className="log-in__donut"/>
                <img src={largeStar} alt="large star" className="log-in__large-star-bottom"/>
                <img src={mediumStar} alt="large star" className="log-in__medium-star-bottom"/>
                <img src={smallStar} alt="large star" className="log-in__small-star-bottom"/>
            </div>
            <form className="log-in__form" onSubmit={handleSubmit} action="/login" method="post">
                <h2 className="log-in__title subtitle">Welcome back!</h2>
                <p className="log-in__paragraph paragraph-small">First time here? 
                    <Link to="/sign_up" className="log-in__link link">
                        <span className="span"> Create account.</span>
                    </Link>
                </p>
                <div className="log-in__input input">
                    <label htmlFor="email" className="log-in__label paragraph-small">Email</label>
                    <input 
                        name="email" 
                        type="text" 
                        id="email" 
                        className="form-field"
                        value={activeUser.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="log-in__input input">
                    <label htmlFor="password" className="log-in__label paragraph-small">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        id="password" 
                        className="form-field"
                        value={activeUser.password}
                        onChange={handleChange}
                    />
                    <p className="log-in__forgot-password paragraph-small">Forgot password?</p>
                </div>
                <div className="log-in__buttons">
                    <Link to="/" className="log-in__link link">
                        <div className="log-in__back-container">
                            <img src={backArrow} alt="back arrow" className="log-in__back-arrow"/>
                            <p className="log-in__back label">Back</p>
                        </div>
                    </Link>
                    <div className="log-in__button-shadow button-shadow">
                        <button className="log-in__button button label">
                            Log in!
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default LogInPage;