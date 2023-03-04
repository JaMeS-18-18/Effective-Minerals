import React from 'react';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import HeadImage2 from '../../assets/ScreenHeader/Header2.png'
import Call from '../../assets/Aloqa/Call.png'
import Footer from '../../components/Footer/Footer';
import './Aloqa.css'
import {useTranslation} from 'react-i18next'
const Aloqa = () => {
  const {t} = useTranslation();

  return (
    <div>
      <ScreenHeader title={t("N_aloqa")} img={HeadImage2} />
      <div className="row m-0 my-5">
        <div className=" col-12 col-md-6 leftColAloqa">
            <div className="leftCard">
          <div className="container-fluid">
              <img className='img-fluid callImg' src={Call} alt="" />
              <h1 className='my-3 fw-bold'>+998 90 123 45 67</h1>
              <p className='fs-3 mt-3'>{t("H_telqiling")}</p>
            </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 RightColAloqa">
            <div className="rightCard">
          <div className="container">
              <h4 className='text-center mb-4'>{t("H_kantaktqoldir")}</h4>
              <div className="form">
                <div className="">
                  <p className="m-0">{t("H-ismingiz")}</p>
                  <input className='input-group-number inputs-aloqa form-control' type="text" />
                </div>
                <div className="my-3">
                  <p className="m-0">{t("H_telnomere")}</p>
                  <input className='input-group-number inputs-aloqa form-control' type="number" placeholder="+998 90 123 45 67" />
                </div>
                <div className="mt-4">
                  <textarea class="form-control" rows={7} placeholder={t("H_izoh")} id="floatingTextarea">
                  </textarea>
                </div>
                <div className="d-flex justify-content-center mt-3">
                <button className='btn Aloqa_btn'>{t("H_yuvborish")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <h2 className='title text-center fs-1 mb-5'>{t("F_manzil")}</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97633.75219139717!2d67.78435452191029!3d40.11878320496631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29442f6b6d4d9%3A0x9278c40ee88910e2!2sJizzax%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1677500903112!5m2!1suz!2s" width="800" height="700" className='Xarita'   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Aloqa;
