import "./Products.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';


const Products = () => {
    return (
        <section className="products">
            <Swiper 
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="products__swiper">
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Products;