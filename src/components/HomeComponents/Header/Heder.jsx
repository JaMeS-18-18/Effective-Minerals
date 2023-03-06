import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Mahsulot from "../../../assets/Home/Mahsulot.png"
import "swiper/css";
import "swiper/css/navigation";
import HederImg from "../../../assets/Home/HederImg2.png"
import {Link} from 'react-router-dom'
import "./Heder.css"
import { Navigation } from "swiper";
import Button from "../../ui/Button";
import {useTranslation} from 'react-i18next'
import WOW from 'wowjs';


export default function Heder() {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, []);
    const {t} = useTranslation()

    return (
        <div >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="SliderBack">
                    <img lazy className="img-fluid" src={HederImg} />
                    </div>

                    <div className="row m-0 w-100 sliderDiv">
                        <div  className="col-lg-6 col-md-6 col-sm-12 p-5 wow animate__animated animate__fadeInDown d-flex justify-content-center align-items-center ">
                            <img src={Mahsulot} className="img-fluid w-100" />
                        </div>
                        <div className="col-lg-6 wow animate__animated animate__fadeInDown col-md-6 col-sm-12 d-flex flex-column justify-content-center text-white ">
                            <h1 className="my-4 saytNamew text-center text-lg-start fs-1 fs-md-1 ">
                                Суперфосфат
                            </h1>
                            <p className="w-100 w-lg-75 mb-4 heder-p text-center text-lg-start fs-6">
                                {t('H_text')}
                            </p>
                           <div onClick={() => {
                            localStorage.setItem("Link", "maxsulot")
                            window.location.reload()
                           }} className="d-flex justify-content-center justify-content-lg-start mb-3">
                                <Link to={"/mahsulot"}>
                                    <Button title = {t('button')} />
                                </Link>
                           </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
