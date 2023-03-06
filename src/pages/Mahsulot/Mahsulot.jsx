import ScreenHeader from '../../components/ScreenHeader/ScreenHeader'
import HeadImage from '../../assets/ScreenHeader/Header2.png'
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mahsulotimg1 from "../../assets/Mahsulotlar/preview 1.png"
import mahsulotimg2 from "../../assets/Mahsulotlar/preview 2.png"
import mahsulotimg3 from "../../assets/Mahsulotlar/preview 3.png"
import mahsulotimg4 from "../../assets/Mahsulotlar/preview 4.png"
import mahsulotimg5 from "../../assets/Mahsulotlar/preview 5.png"
import mahsulotimg6 from "../../assets/Mahsulotlar/preview 6.png"
import {Link} from 'react-router-dom'


import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";

import "./Mahsulot.css"
import Button from '../../components/ui/Button'
import { useTranslation } from 'react-i18next';

export default function Mahsulot() {
    const { t } = useTranslation()
    return (
        <div className='' >
            <ScreenHeader img={HeadImage} title={"Суперфосфат"} />
            <div className='container'>
                <div className='row py-lg-5 py-3'>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-2'>
                        <h3 className='mb-5 text-center text-lg-start fs-1 '>
                            {t("M_subtitle")}
                        </h3>
                        <div className='row'>
                            <div className='col-6 d-flex align-items-center '>
                                <p className='mb-0 fs-4'>
                                    {t("M_qadoq")}

                                </p>
                            </div>
                            <div className='col-6 d-flex'>
                                <div className='massa fs-6 ' > 50 кг</div>
                                <div className='massa fs-6' > 500 кг</div>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-6 d-flex align-items-center '>
                                <p className='mb-0 fs-4'>
                                    {t("M_ish")}

                                </p>
                            </div>
                            <div className='col-6 d-flex align-items-center'>
                                <p className='p-text-style'>Жиззаҳ , Узбекистан</p>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-6 d-flex align-items-center '>
                                <p className='mb-0 fs-4'>
                                    {t("M_shakl")}

                                </p>
                            </div>
                            <div className='col-6 d-flex align-items-center'>
                                <p className='p-text-style'>Гранулы 2-5 мм</p>
                            </div>
                        </div>
                        <div className='mt-4' >
                            <p className='mb-0 fs-4'>
                                {t("M_tarkib")}
                            </p>
                            <table class="table table-striped table-bordered table-hover mt-2">

                                <tbody>
                                    <tr>
                                        <td >18.5%</td>
                                        <td  >Пятиокис фосфора (P₂O₅), общий</td>
                                    </tr>
                                    <tr>
                                        <td  >31%</td>
                                        <td >Оксид кальция (CaO), общий</td>
                                    </tr>
                                    <tr>
                                        <td >29%</td>
                                        <td >Триоксид серы (SO₃), общий</td>
                                    </tr>
                                    <tr>
                                        <td >0.2%</td>
                                        <td >Бор (B), общий</td>
                                    </tr>
                                    <tr>
                                        <td >0.2%</td>
                                        <td >Цинк (Zn), общий</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src={mahsulotimg1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={mahsulotimg2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={mahsulotimg3} />

                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={mahsulotimg4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={mahsulotimg5} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={mahsulotimg6} />
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-2 col-md-12 col-sm-12' >
                        <span className='fs-4' >                            {t("M_ilova")}
                        </span>
                    </div>
                    <div className='col-lg-10 col-md-12 col-sm-12' >
                        <span className='p-text-style'>
                            <span className='fs-4' >  
                              {t("M_ilova_t")}

                            </span>
                            </span>
                    </div>
                    <div className='col-lg-2 col-md-12 col-sm-12 mt-5' >
                        <span className='fs-4' >ДОСТАВКА:</span>
                    </div>
                    <div className='col-lg-10 col-md-12 col-sm-12 mt-5' >
                        <span className='p-text-style'>
                        {t("M_dostavka")}

                        </span>
                    </div>
                </div>
                <div className='mt-5'>
                    <span className='fs-4'>
                        Дозалар:
                    </span>

                    <table class="table table-striped table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Дозалар:</th>
                                <th scope="col">Ўғит ставкаси:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Озимая и яровая пшеница:</td>
                                <td>150-250 кг/га</td>
                            </tr>
                            <tr>
                                <td>Озимый и яровой рапс</td>
                                <td>150-300 кг/га</td>
                            </tr>
                            <tr>
                                <td>Озимый и яровой ячмень</td>
                                <td>150-300 кг/га</td>
                            </tr>
                            <tr>
                                <td>Сахарная свекла</td>
                                <td>120-220 кг/га</td>
                            </tr>
                            <tr>
                                <td>Соя, горох</td>
                                <td>120-220 кг/га</td>
                            </tr>
                            <tr>
                                <td>Кукуруза, подсолнечник</td>
                                <td>150-300 кг/га</td>
                            </tr>
                            <tr>
                                <td>Картофель, овощи</td>
                                <td>150-300 кг/га</td>
                            </tr>
                            <tr>
                                <td>Гречка</td>
                                <td>120-180 кг/га</td>
                            </tr>
                            <tr>
                                <td>Плодовые деревья и кусты</td>
                                <td>200-300 кг/га</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div>
                    <span className='fs-4'>
                    {t("M_hususiyat")}

                    </span>
                    <div className='mt-2 py-2'>
                        <ul className='M_ul'>
                            <li>
                            {t("M_hususiyat1")}

                            </li>
                            <li>
                            {t("M_hususiyat2")}

                            </li>
                            <li>
                            {t("M_hususiyat3")}

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                            localStorage.setItem("Link", "aloqa")
                            window.location.reload()
                           }} className='d-flex justify-content-center mt-2 mt-lg-4 my-5 '>
                <Link to={"/aloqa"}>
                     <Button title={t("M_buyurtma")} />
                </Link>
            </div>

        </div>
    )
}
