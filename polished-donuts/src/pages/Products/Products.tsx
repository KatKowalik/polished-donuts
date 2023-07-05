import "./Products.scss";
// import ProductCard from "../../components/ProductCard/ProductCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';
import glutenIcon from "../../assets/icons/gluten-icon.svg";
import milkIcon from "../../assets/icons/milk-icon.svg";
import peanutIcon from "../../assets/icons/peanut-icon.svg";
import donut from "../../assets/images/Pistachio-raspberry graphic.png";


const Products = () => {
    return (
        <section className="products">
            <Swiper 
                  cssMode={true}
                  navigation={
                    { nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                     clickable: true}
                 }
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  slidesPerView={1}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="products__swiper">
                <SwiperSlide>
                    <article className="product-card green">
                        <div className="product-card__text">
                            <h2 className="product-card__title section-header">
                                Pistachio Raspberry
                            </h2>
                            <p className="product-card__description paragraph">
                                Experience a delightful fusion of flavors with our pistachio raspberry donut. Indulge in the rich, nutty essence of pistachio, perfectly complemented by the tangy sweetness of raspberry filling, all nestled within a fluffy, golden-brown donut.
                            </p>
                            <p className="product-card__contains label">Contains:</p>
                            <div className="product-card__icons">
                                <img src={glutenIcon} alt="gluten icon" className="product-card__icon"/>
                                <img src={milkIcon} alt="gluten icon" className="product-card__icon"/>
                                <img src={peanutIcon} alt="gluten icon" className="product-card__icon"/>
                            </div>
                        </div>
                        <img src={donut} alt="donut graphic" className="product-card__product-img"/>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Products;