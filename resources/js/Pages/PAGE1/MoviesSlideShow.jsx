import React from "react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slideshow() {
  // const images = [
  //   { image: require("./images/2.jpg") },
  //   {image: require("./images/2.jpg") },
  //   { image: require("./images/2.jpg") },
  // ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
              modules={[
                  Autoplay,
                //   Pagination,
                //   Navigation
              ]}
        className="mySwiper"
      >
        <SwiperSlide><img className="swiper-image" src='' alt=''/></SwiperSlide>
        <SwiperSlide><img src="{images[0]}" alt='' /></SwiperSlide>
        <SwiperSlide><img src="{images[0]}" alt='' /></SwiperSlide>
        <SwiperSlide><img src="{images[0]}" alt='' /></SwiperSlide>
        {/* hawelt ndirhom f variable o nbda n3it 23lihom mais masd9och */}
      
      </Swiper>
    </>
  );
}