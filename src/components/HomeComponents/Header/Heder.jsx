import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Mahsulot from "../../../assets/Home/Mahsulot.png"
import "swiper/css";
import "swiper/css/navigation";
import HederImg from "../../../assets/Home/HederImg2.png"

import "./Heder.css"
import { Navigation } from "swiper";
import Button from "../../ui/Button";
import {useTranslation} from 'react-i18next'

export default function Heder() {
    const {t} = useTranslation()

    return (
        <div >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="SliderBack">
                    <img className="img-fluid" src={HederImg} />
                    </div>

                    <div className="row m-0 w-100 sliderDiv">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-center ">
                            <img src={Mahsulot} className="img-fluid w-100" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-white ">
                            <h1 className="my-4 saytNamew text-center text-lg-start fs-1 fs-md-1 ">
                                Суперфосфат
                            </h1>
                            <p className="w-100 w-lg-75 mb-4 heder-p text-center text-lg-start fs-6">
                                {t('H_text')}
                            </p>
                           <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                                <Button title = {t('button')} />
                           </div>

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
