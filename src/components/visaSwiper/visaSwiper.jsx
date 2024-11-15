import { Swiper, SwiperSlide } from 'swiper/react';
import "./visaSwiper.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Greece from "../../images/taj-mahal3-1675766657.webp";
import Parij from "../../images/parij.webp";
import Japan from "../../images/japan-cities.jpg";
import Dubai from "../../images/djbai.avif";
import Newyork from "../../images/Aqsh.jpg";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function VisaSwiper() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 10,
                    modifier: 1,
                    slideShadows: true,
                }}

                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-two">
                        <h1>Taj Mahal</h1>
                        <p>A symbol of love and one of the world's wonders, the Taj Mahal was built by Emperor <br />  Shah Jahan and stands as an iconic masterpiece of architecture.</p>
                        <img src={Greece} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-two">
                        <h1>Dubai</h1>
                        <p>
                            Known for its modern architecture, Dubai boasts landmarks like <br /> the Burj Khalifa, Palm Jumeirah, and one of the largest malls in the world, the Dubai Mall
                        </p>
                        <img src={Dubai} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-two">
                        <h1>Paris</h1>
                        <p>
                            Paris is renowned as the capital of fashion and art, offering iconic <br /> landmarks like the Eiffel Tower, the Louvre Museum, and romantic walks along the Seine River.
                        </p>
                        <img src={Parij} />
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="swiper-two">
                        <h1>Japan</h1>
                        <p>
                            Kyoto is famous for its traditional temples, cultural sites, and <br /> beautiful cherry blossoms in spring, reflecting the heart of Japanese heritage.
                        </p>
                        <img src={Japan} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-two">
                        <h1>New York</h1>
                        <p>
                            Known as a global cultural and financial hub, New York City is <br /> famous for landmarks like the Statue of Liberty, Times Square, and its diverse multicultural atmosphere.
                        </p>
                        <img src={Newyork} />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}