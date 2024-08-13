import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import carousel1 from "../assets/carousel_1.jpg";
import carousel2 from "../assets/carousel_2.jpg";
import carousel3 from "../assets/carousel_3.jpg";
import carousel4 from "../assets/carousel_4.jpg";
import carousel5 from "../assets/carousel_5.jpg";
import realTimeCarousel1 from "../assets/trial1.jpg"; 
import realTimeCarousel2 from "../assets/trial2.jpg";
import realTimeCarousel3 from "../assets/trial3.jpg";

import Image from 'next/image';
const Carousel = () => {
  return (<>
    <div className='max-w-screen-2xl relative  p-0 ' >
        <div className='absolute bottom-0 bg-gradient-to-t from-[#fff] to-transparent z-20 h-[6vh] w-screen p-0'></div>
      <Swiper className='md:h-[84vh] w-[99vw] h-[30vh]  ' loop={true} 
      spaceBetween={0} modules={[Navigation,Autoplay]}
      navigation={true} 
      autoplay={{delay:4500}}
       >
            <SwiperSlide><Image src={realTimeCarousel1} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={realTimeCarousel2} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={realTimeCarousel3} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={carousel1} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={carousel2}  alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={carousel3} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={carousel4} alt="error"></Image></SwiperSlide>
            <SwiperSlide><Image src={carousel5} alt="error"></Image></SwiperSlide>
      </Swiper>
    </div>
    
    </>
  )
}

export default Carousel
