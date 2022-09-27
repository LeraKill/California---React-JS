import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import FeatureItem from "../../Any/FeatureItem/FeatureItem";
import { useFeatureSwiper } from "./useFeatureSwiper";

const FeaturesSwiper = () => {
  const { featureSwiperArr } = useFeatureSwiper();

  return (
    <div className="swiper__wrapper">
      <Swiper
        className="features__swiper"
        loop={true}
        centeredSlides={true}
        navigation={{ prevEl: ".swiper__prev", nextEl: ".swiper__next" }}
        scrollbar={{ el: ".swiper-scrollbar" }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Keyboard]}
      >
        {featureSwiperArr &&
          featureSwiperArr.map((item, index) => (
            <SwiperSlide>
              <FeatureItem
                key={`${item.title}_${index}`}
                title={item.title}
                text={item.text}
                button={item.button}
                img={item.img}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <button className="swiper__prev"></button>
      <button className="swiper__next"></button>
    </div>
  );
};

export default FeaturesSwiper;
