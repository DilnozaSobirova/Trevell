import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperStyle.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Tajmahal from '../../images/taj-mahalBac.svg'
import Dubai from '../../images/bacDubai.png'
import Newyork from '../../images/newyorkBac.svg'
import Greece from '../../images/greeceBac.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function SwiperSlider() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (1 sekund)
            easing: 'ease', // Easing turi
            once: true, // Scroll qilinganda faqat bir marta animatsiya bo'lishini istasangiz
        });
    }, []);

    return (
        <>
            <section className='explore'>


                <Swiper
                    spaceBetween={0}
                    effect={'fade'}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="text">
                            <p className='text-p'>
                                Take a look at the beautiful city:
                            </p>
                            <p className='city'>
                                New York
                            </p>
                            <button className='go'>
                                Go to
                            </button>
                            <div className='b-box'>

                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-arrow-up-right-dots"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>  Population:</p>
                                        <h3>1.335 million </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-square"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>Territory:</p>
                                        <h3>496 km² </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <span className="i-sapn">
                                        <i class="fa-solid fa-hand-holding-dollar"></i>
                                    </span>
                                    <span className="text-span">
                                        <p>Average price:</p>
                                        <h3>500$</h3>
                                    </span>
                                </div>
                                <button className='more-btn'>
                                    Even more
                                </button>
                            </div>
                        </div>

                        <img className='img' src={Newyork} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text'>
                            <p className='text-p'>
                                Take a look at the beautiful city:
                            </p>
                            <p className='city'>
                                Dubai
                            </p>
                            <button className='go'>
                                Go to
                            </button>
                            <div className='b-box'>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-arrow-up-right-dots"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>  Population:</p>
                                        <h3>67,41  million </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-square"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>Territory:</p>
                                        <h3>551 500  km² </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <span className="i-sapn">
                                        <i class="fa-solid fa-hand-holding-dollar"></i>
                                    </span>
                                    <span className="text-span">
                                        <p>Average price:</p>
                                        <h3>$425 600</h3>
                                    </span>
                                </div>
                                <button className='more-btn'>
                                    Even more
                                </button>
                            </div>
                        </div>
                        <img className='img' src={Dubai} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text">
                            <p className='text-p'>
                                Take a look at the beautiful city:
                            </p>
                            <p className='city'>
                                Taj-Mahal
                            </p>
                            <button className='go'>
                                Go to
                            </button>
                            <div className='b-box'>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-arrow-up-right-dots"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>  Population:</p>
                                        <h3>188.4 million </h3>

                                    </div>
                                </div>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-square"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>Territory:</p>
                                        <h3>188.4 km² </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-hand-holding-dollar"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>Average price:</p>
                                        <h3>850 $</h3>
                                    </div>
                                </div>
                                <button className='more-btn'>
                                    Even more
                                </button>
                            </div>
                        </div>
                        <img className='img' src={Tajmahal} />

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text">
                            <p className='text-p'>
                                Take a look at the beautiful city:
                            </p>
                            <p className='city'>
                                Greece
                            </p>
                            <button className='go'>
                                Go to
                            </button>
                            <div className='b-box'>

                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-arrow-up-right-dots"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>  Population:</p>
                                        <h3>1.335 million </h3>
                                    </div>
                                </div>
                                <div className="big-box">
                                    <div className="i-sapn">
                                        <i class="fa-solid fa-square"></i>
                                    </div>
                                    <div className="text-span">
                                        <p>Territory:</p>
                                        <h3>496 km² </h3>
                                    </div>
                                </div>


                                <div className="big-box">
                                    <span className="i-sapn">
                                        <i class="fa-solid fa-hand-holding-dollar"></i>
                                    </span>
                                    <span className="text-span">
                                        <p>Average price:</p>
                                        <h3>950 $</h3>
                                    </span>
                                </div>
                                <button className='more-btn'>
                                    Even more
                                </button>
                            </div>
                        </div>

                        <img className='img' src={Greece} />
                    </SwiperSlide>
                </Swiper>


            </section>
        </>
    );
}