import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

const HeroSection = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <img
            className="w-100"
            style={{ height: "500px" }}
            src="https://i.ibb.co/8d39tB2/Website-Homepage-Fashion-Collage-Banner.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            style={{ height: "500px" }}
            src="https://i.ibb.co/XxyP2CJ/Pink-and-Yellow-Super-Sale-Banner-Template.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            style={{ height: "500px" }}
            src="https://i.ibb.co/zPhgvSS/Website-Homepage-Fashion-Collage-Banner-1.jpg"
          />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default HeroSection;
