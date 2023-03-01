import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Mahsulot from "../../../assets/Home/Mahsulot.png"

import "swiper/css";
import "swiper/css/navigation";
import HederImg from "../../../assets/Home/HederImg2.png"

import "../Header/Heder.css"
import { Navigation } from "swiper";
import Button from "../../ui/Button";

export default function Heder() {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="SliderBack">
                    <img src={HederImg} />
                    </div>

                    <div className="row  w-100 sliderDiv ">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-center ">
                            <img src={Mahsulot} className="sliderImg img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-white ">
                            <h1 className="mb-4 saytNamew ">
                                Суперфосфат
                            </h1>
                            <p className="w-75 mb-4 heder-p">
                                Оддий ёки аммонизацияланган суперфосфат ўғити цитрат эритмаларидан эрийдиган  самарали фосфорли ўғитлар ҳисобланади.
                                Унинг донадорлаштилиган турлари қониқарли физик-кимёвий хоссаларига эга бўлиб тупроқ муҳитини нордонлаштирмайди.
                            </p>
                            <Button title = "Batafsil" />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}
