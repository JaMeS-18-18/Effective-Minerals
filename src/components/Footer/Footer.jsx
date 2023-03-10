import React, { useEffect } from 'react'
import './Footer.css'
import Maysa from '../../assets/Footer/Maysa.png'
import Logo from '../../assets/Footer/Logo.png'
import footer from '../../assets/Footer/Footer.png'
import WOW from 'wowjs';
import {useTranslation} from 'react-i18next'

export default function Footer() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  const {t} = useTranslation();

  const styles = {
    backgroundImage: `url(${footer})`,
    width: "100%",
    height: "auto",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "3rem"
  }
  return (
    <div>
      <img className='img-fluid w-100 animate__slideInUp wow animate__animated Maysa' src={Maysa} alt="" />
      <div style={styles} className="footer">
        <div className="container">
        <div className="row">
          <div className="col">
            <img className='img-fluid' src={Logo} alt="" />
            <div className='text-light my-4'>
              <p className='my-5 foot_text '>
              {t("F_info")}
              </p>
              <div className='d-flex'>
              <i className='fs-4 me-3 bi bi-facebook'></i>
              <i className='fs-4 mx-3 bi bi-instagram'></i>
              <i className='fs-4 mx-3 bi bi-telegram'></i>
              <i className='fs-4 mx-3 bi bi-twitter'></i>
              </div>
            </div>
          </div>
          <div className="col text-white mx-4">
            <h5 className='mb-5'>{t("F_bolim")}</h5>
            <p className='foot_text'>{t("F_haqida")}</p>
            <p className='foot_text'>{t("F_mahsulot")}</p>
            <p className='foot_text'>{t("F_xizmatlar")}</p>
            <p className='foot_text'>{t("F_aloqa")}</p>
          </div>
          <div className="col text-white mx-4">
          <h5 className='mb-5'>{t("F_manzil")}</h5>
            <p className='foot_text'>{t("F_kocha")}</p>
          </div>
          <div className="col text-white">
            <h5>{t("F_xarita")}</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97633.75219139717!2d67.78435452191029!3d40.11878320496631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29442f6b6d4d9%3A0x9278c40ee88910e2!2sJizzax%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1677500903112!5m2!1suz!2s" width="400" height="300" className='Xarita'   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <p className='text-light text-center my-4 '>Powered by: Soff<span className='hub'>Hub</span> </p>
        </div>
        </div>
      </div>
    </div>
  )
}
