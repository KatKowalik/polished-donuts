import "./HomePage.scss";
import heroImg from "../../assets/images/Hero illustration.png";
import Poland from "../../assets/images/Poland.png";
import circleDoodle from "../../assets/images/circle-doodle.png";
import arrowDoodle from "../../assets/images/arrow-doodle.png";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const HomePage = (): ReactElement => {
    return (
        <div className="home-page">
            <section className="home-page__hero-section">
                <div className="home-page__text">
                    <h1 className="home-page__title page-header">Indulge in Poland's Sweetest Tradition!</h1>
                    <p className="home-page__copy paragraph">Traditionally made Polish donuts, known as "pączki," are a delectable delicacy crafted with love and heritage. These deep-fried treats boast a golden, crispy exterior, while hiding a sweet and fluffy interior bursting with delightful fillings.</p>
                    <div className="home-page__button-container">
                        <Link to="/products" className="home-page__link">
                            <div className="home-page__button-shadow button-shadow">
                                <button className="home-page__button button label">
                                    Try Our Donuts!
                                </button>
                            </div>
                        </Link>
                        <img src={arrowDoodle} alt="arrow doodle" className="home-page__hero-doodle"/>
                    </div>
                </div>
                <img src={heroImg} alt="illustration of donut" className="home-page__hero-img"/>
            </section>
            <section className="home-page__history-section">
                <img src={Poland} alt="illustration of contour of Poland" className="home-page__history-img"/>
                <div className="home-page__history-text">
                    <h2 className="home-page__history-title section-header">Why Polish donuts?</h2>
                    <p className="home-page__history-copy paragraph">Polish donuts, known as "pączki" (pronounced "punch-key"), are a delectable treat that holds a special place in the hearts of pastry enthusiasts. These traditional Polish confections are deep-fried until golden brown, resulting in a crisp outer layer that encases a fluffy, sweet interior. Pączki are generously filled with an array of luscious fillings, such as fruit preserves, creamy custards, or rich chocolate. Each bite offers a harmonious balance of textures and flavors, with a burst of delightful sweetness that is truly irresistible. Whether enjoyed on Fat Thursday (Tłusty Czwartek) or any other occasion, Polish donuts are a heavenly indulgence that showcases the country's rich culinary heritage.</p>
                </div>
            </section>
            <section className="home-page__hungry-section">
                <h2 className="home-page__hungry-title section-header">Hungry now?</h2>
                <Link to="/products" className="home-page__link">
                    <div className="home-page__button-shadow button-shadow">
                        <button className="home-page__button button label">
                            See Our Products!
                        </button>
                    </div>
                </Link>
                <img src={circleDoodle} alt="doodle circle" className="home-page__hungry-doodle"/>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;