import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./index.css";

const Cards = (props) => {
  return (
    <div className=" mx-[20rem] xxs:py-10 relative font-raleway">
      <Swiper
        slidesPerView={4}
        spaceBetween={70}
        pagination={false}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="flex justify-evenly items-center w-[100%]"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <img src={props.img4} alt="suit1" className=" mix-blend-multiply " />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img2} alt="suit1" className=" mix-blend-multiply" />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img3} alt="suit1" className=" mix-blend-multiply " />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img5} alt="suit1" className=" mix-blend-multiply " />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img2} alt="suit1" className=" mix-blend-multiply " />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img4} alt="suit1" className=" mix-blend-multiply" />
          <div className=" pt-4 flex justify-between items-center">
            <p>₹ 10000</p>
            <button className="bg-red-400 p-2 rounded-md hover:bg-red-500 text-white">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next hover:bg-slate-500"></div>
      <div className="swiper-button-prev hover:bg-slate-500"></div>
    </div>
  );
};

export default Cards;
