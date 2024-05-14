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
                    <img src="../../public/slide1.jpg" alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../public/slide2.jpg" alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../public/slide3.jpg" alt="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../public/slide4.jpg" alt="slide-img" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
