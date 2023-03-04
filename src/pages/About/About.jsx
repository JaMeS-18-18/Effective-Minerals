import React, { useEffect } from 'react'
import AboutIMage1 from '../../assets/About/About1.png'
import AboutIMage2 from '../../assets/About/About2.png'
import AboutIMage3 from '../../assets/About/About3.png'
import AboutIMage4 from '../../assets/About/About4.png'
import Sertficate from '../../assets/About/Sertificate.png'
import Footer from '../../components/Footer/Footer'
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader'
import HeadImage from '../../assets/ScreenHeader/Header1.png'
import './About.css'
import WOW from 'wowjs';
import {useTranslation} from 'react-i18next'

export default function About() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  const {t} = useTranslation()
  
  return (
    <div>
      <ScreenHeader img={HeadImage} title={"Еффиcтиве Минералс"}/>
      <div className="container ">
      <div className="row py-5 ">
        <div className=" col-12 col-md-8">
          <div className="about  ">
            <h3 className="title text-center mb-3">
             {t('H_haqida')}
            </h3>
            <p className="info">
            АО «Аммофос-Максам» - одно из крупнейших предприятий Республики Узбекистан, введенное в строй в 1969 году и производящее в настоящее время сложные азотно-фосфорные удобрения на базе фосфоритов Кызылкумского месторождения.

Предприятие входит в состав Государственной акционерной компании «Узкимёсаноат» республики Узбекистан. В феврале 2009 года 49% акций предприятия реализовано иностранному инвестору - испанской корпорации «Maxam Corp, S.A.U».

Предприятие расположено у подножия горы Курамин в 60 километрах от Ташкента и в 7 км от города Алмалык и занимает площадь 194,5 гектара.

Основные виды выпускаемой продукции и оказываемых услуг предприятия: аммофос, аммоний сульфат фосфат, супрефос, сульфат аммония, ДВП, электролит, серная кислота, кормовой фосфат аммония, тринатрийфосфата (ТНФ) и другие.

В ходе реализации государственной программы по вступлению в ВТО, укрепления позиций Республики в мировом сообществе, для выхода на новые рынки, закрепления на них, завоевания авторитета и приобретения новых покупателей, предприятие внедрило и применяет интегрированную систему менеджмента качества.

В июне 2007 г. сертифицирована система управления качеством (СМК) на соответствие требованиям международного стандарта ИСО 9001:2000.

В 2010 г. успешно проведен первый ресертификационный аудит действующей системы менеджмента качества на соответствие требованиям ISO 9001:2008.

В августе 2012 г. сертифицирована «Система экологической безопасности на соответствие требованиям ИСО 14001:2000».

В мае 2013 г. внедрена и сертифицирована Интегрированная система менеджмента на соответствие требованиям трем стандартам:
ISO 9001 «Система менеджмента качества;
ISO 14001 «Система экологической безопасности»;
ISO 18001 «Системы охраны здоровья и безопасности труда»
Продукция предприятия сертифицирована, испытательные и измерительные лаборатории (НИХТЛ, ИЛМ, санитарная лаборатория, ЛНМК) аккредитованы и аттестованы в Национальной системе сертификации и стандартизации агентства Узстандарт на соответствие требованиям ISO 17025.
            </p>
          </div>
        </div>
        <div className=" col-12 col-md-4  ">
          <div className="about_image">
            <div>
              <img className='img-fluid' src={AboutIMage1} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage2} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage3} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Yutuqlar">
        <h1 className='title fw-bold animate__slideInDown wow animate__animated'>{t("A_yutuqlar")}</h1>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className='cardimage animate__backInLeft wow animate__animated '>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInLeft wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInLeft wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
          <div className="cardimage2 order-3 order-lg-2 col-md-6 col-lg-4">
            <div className='cardimage animate__backInUp wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInUp wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInUp wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
          <div className=" order-2 order-lg-3 col-md-6 col-lg-4">
            <div className='cardimage animate__backInRight wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInRight wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInRight wow animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
