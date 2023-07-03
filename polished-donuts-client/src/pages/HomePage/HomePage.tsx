import "./HomePage.scss";
import heroImg from "../../assets/images/Hero illustration.png"

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page__text">
                <h1 className="home-page__title">Indulge in Poland's Sweetest Tradition!</h1>
                <p className="home-page__copy">Traditionally made Polish donuts, known as "pączki," are a delectable delicacy crafted with love and heritage. These deep-fried treats boast a golden, crispy exterior, while hiding a sweet and fluffy interior bursting with delightful fillings.</p>
                <div className="home-page__button-container">
                    <button className="home-page__button">
                        Try Our Donuts!
                        <div className="home-page__button-shadow"></div>
                    </button>
                </div>
            </div>
            <img src={heroImg} alt="illustration of donut" className="home-page__hero-img"/>
        </div>
    )
}

export default HomePage;