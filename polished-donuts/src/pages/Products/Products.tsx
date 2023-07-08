import "./Products.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';
import glutenIcon from "../../assets/icons/gluten-icon.svg";
import milkIcon from "../../assets/icons/milk-icon.svg";
import peanutIcon from "../../assets/icons/peanut-icon.svg";
import axios from "axios";
import { useState, useEffect } from "react";


type Donut = {
    name: string;
    background: string;
    description: string;
}

const Products = () => {
    const [donuts, setDonuts] = useState<Donut[]>([]);
    const imgURL = "http://localhost:8080/"

    useEffect(() => {
        const getDonuts = async () => {
            try {
              const donutsData = await axios.get<Donut[]>("http://localhost:8080/donuts")
              setDonuts(donutsData.data)
            } catch (error) {
              console.log((error as Error).message)
            }
          }
          getDonuts();
    }, []);

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
                <SwiperSlide>
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
                                <img src={milkIcon} alt="gluten icon" className="product-card__icon"/>
                                <img src={peanutIcon} alt="gluten icon" className="product-card__icon"/>
                            </div>
                        </div>
                        <img src={`${imgURL}${donut.background}.png`} alt="donut graphic" className="product-card__product-img"/>
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