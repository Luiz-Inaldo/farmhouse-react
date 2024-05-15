import { useState } from "react";

//import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

// img url import
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

// import css
import './Carousel.css'

export const Carousel = () => {

    return (
        <div className="carousel-wrapper">
            <Swiper
            style={{'--swiper-pagination-color': '#fff'}}
                modules={[FreeMode, Navigation, Pagination]}
                pagination={{clickable: true}}
                loop={true}
                navigation={true}
                className='swiper-main'
            >
                <SwiperSlide>
                    <img src={slide1} alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide-img" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
