// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Import required Swiper modules
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function SwiperSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper-slider"
        >
            {/* Example Slides */}
            <SwiperSlide>
                <div className="slide-content">
                    <img src="path-to-image1.jpg" alt="Location 1" />
                    <h3>Sharm El Sheikh</h3>
                    <p>Population: 4 million</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <img src="path-to-image2.jpg" alt="Location 2" />
                    <h3>Location 2</h3>
                    <p>Population: X million</p>
                </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
        </Swiper>
    );
}

