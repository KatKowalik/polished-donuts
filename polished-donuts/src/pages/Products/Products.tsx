import "./Products.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';
import glutenIcon from "../../assets/icons/gluten-icon.svg";
import milkIcon from "../../assets/icons/milk-icon.svg";
import peanutIcon from "../../assets/icons/peanut-icon.svg";
import { useLoaderData } from "react-router-dom";
import { Donut } from "../../types/types";
import beige from "../../assets/beige.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import pink from "../../assets/pink.png";



const Products = () => {
    const donuts = useLoaderData() as Donut[];
    const images = {beige: beige, blue: blue, green: green, pink: pink};

    return (
        <section className="products">
            <Swiper 
                  cssMode={true}
                  navigation={
                    { 
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                 }
                  pagination={
                    {
                        clickable: true,
                        el: ".swiper-pagination",
                        hideOnClick: false,
                    }
                }
                  mousewheel={true}
                  keyboard={true}
                  slidesPerView={1}
                  modules={[Navigation, Pagination]}
                  className="products__swiper">
                { donuts.map(donut => {
                    return (
                <SwiperSlide key={donut.background}>
                    <article className={`product-card ${donut.background}`}>
                        <div className="product-card__text">
                            <h2 className="product-card__title section-header">
                                {donut.name}
                            </h2>
                            <p className="product-card__description paragraph">
                                {donut.description}
                            </p>
                            <p className="product-card__contains label">Contains:</p>
                            <div className="product-card__icons">
                                <img src={glutenIcon} alt="gluten icon" className="product-card__icon"/>
                                <img src={milkIcon} alt="milk icon" className="product-card__icon"/>
                                <img src={peanutIcon} alt="peanut icon" className={(donut.name === "Pistachio Raspberry")? "product-card__icon" : "product-card__icon hidden"}/>
                            </div>
                        </div>
                        <img src={`${images[`${donut.background}`]}`} alt="donut graphic" className="product-card__product-img"/>
                    </article>
                </SwiperSlide>
                )
                })}
                <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow" style={{color:"black"}}></div>
                        <div className="swiper-button-next slider-arrow" style={{color:"black"}}></div>
                        <div className="swiper-pagination swiper-pagination-bullet"></div>
                </div>
            </Swiper>
        </section>
    )
}

export default Products;
