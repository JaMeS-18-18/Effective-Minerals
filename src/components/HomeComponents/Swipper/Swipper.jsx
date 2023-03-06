import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { saveAs } from 'file-saver';
import Sertficate from '../../../assets/About/Sertificate.png';
import Sertficate1 from '../../../assets/About/Sertificate1.png';
import Sertficate2 from '../../../assets/About/Sertificate2.png';
import Sertficate3 from '../../../assets/About/Sertificate3.png';
import Sertficate4 from '../../../assets/About/Sertificate4.png';
import Sertficate5 from '../../../assets/About/Sertificate5.png';
import Sertficate6 from '../../../assets/About/Sertificate6.png';
import Sertficate7 from '../../../assets/About/Sertificate7.png';
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
  const downloadPdf = (num) => {
    console.log(num);
    fetch(num)
      .then(response => response.blob())
      .then(blob => saveAs(blob, 'EffictiveMinerals.png'))
      .catch(error => console.log(error));
  };

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
            <img className='img-fluid'  src={Sertficate1} alt="" />
            <div onClick={() => downloadPdf(Sertficate1)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate} alt="" />
            <div onClick={() => downloadPdf(Sertficate)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>
          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate2} alt="" />
            <div onClick={() => downloadPdf(Sertficate2)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate3} alt="" />
            <div onClick={() => downloadPdf(Sertficate3)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate4} alt="" />
            <div onClick={() => downloadPdf(Sertficate4)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate5} alt="" />
            <div onClick={() => downloadPdf(Sertficate5)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>
          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate6} alt="" />
            <div onClick={() => downloadPdf(Sertficate6)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
              <span className='title  fs-4 mt-2'>{t("A_yuklash")}</span>
              <i class="bi bi-download fs-3 mx-2 icons"></i>
            </div>
          </div>

          <div className='cardimage animate__backInLeft wow animate__animated '>
            <img className='img-fluid'  src={Sertficate7} alt="" />
            <div onClick={() => downloadPdf(Sertficate7)} className='d-flex yutuqlar_text justify-content-center align-items-center'>
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
