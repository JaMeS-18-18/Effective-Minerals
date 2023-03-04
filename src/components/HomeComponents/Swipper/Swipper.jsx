import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sertficate from '../../../assets/About/Sertificate.png';
import {useTranslation} from 'react-i18next'

const Swipper = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const {t} = useTranslation();

  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
      </li>
    );
  };

  return (
    <div>
      <div className="container-fluid">
        <Carousel customDot={CustomDot} Customs responsive={responsive}>
          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>
          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>
          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid' src={Sertficate} alt="" />
            <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Swipper;
