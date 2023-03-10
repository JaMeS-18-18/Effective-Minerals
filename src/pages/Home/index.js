import React from 'react';
import Accardion from '../../components/HomeComponents/Accardion/Accardion';
import Heder from '../../components/HomeComponents/Header/Heder';
import Ishlatilishi from '../../components/HomeComponents/Ishlatilishi/Ishlatilishi';
import Kompoaniya from '../../components/HomeComponents/Kompaniya/Kompoaniya';
import Sertificate from '../../components/HomeComponents/Sertificate/Sertificate';
import Call from '../../assets/Aloqa/Call.png'
import Tel from "../../assets/telefon.png"
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className='home_body'>
      <a href="#call">
        <img  className='call_img' src={Tel} alt="" />
      </a>
      <Heder />
      <Kompoaniya />
      <Ishlatilishi />
      <Sertificate />
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
        <div id='call' className=" col-12 col-md-6 RightColAloqa">
          <form 
          action="https://formspree.io/f/mdobvwlb"
          method="POST"
            >
            <div className="rightCard">
              <div className="container">
                <h4 className='text-center mb-4'>{t("H_kantaktqoldir")}</h4>
                <div className="form">
                  <div className="">
                    <p className="m-0">{t("H-ismingiz")}</p>
                    <input name='ism' className='input-group-number inputs-aloqa form-control' type="text" />
                  </div>
                  <div className="my-3">
                    <p className="m-0">{t("H_telnomere")}</p>
                    <input name='nomer' className='input-group-number inputs-aloqa form-control' type="number" placeholder="+998 90 123 45 67" />
                  </div>
                  <div className="mt-4">
                    <textarea name='izoh' class="form-control" rows={7} placeholder={t("H_izoh")} id="floatingTextarea">
                    </textarea>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type='submit' className='btn Aloqa_btn'>{t("H_yuvborish")}</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Accardion />

    </div>
  );
}

export default Index;
