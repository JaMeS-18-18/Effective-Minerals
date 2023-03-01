import React from 'react';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import HeadImage2 from '../../assets/ScreenHeader/Header2.png'
import Call from '../../assets/Aloqa/Call.png'
import Footer from '../../components/Footer/Footer';
import './Aloqa.css'
const Aloqa = () => {
  return (
    <div>
      <ScreenHeader title={"Biz bilan aloqa"} img={HeadImage2} />
      <div className="row m-0 my-5">
        <div className=" col-12 col-md-6 leftColAloqa">
            <div className="leftCard">
          <div className="container-fluid">
              <img className='img-fluid callImg' src={Call} alt="" />
              <h1 className='my-3 fw-bold'>+998 90 123 45 67</h1>
              <p className='fs-3 mt-3'>Qo'ng'iroq qiling</p>
            </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 RightColAloqa">
            <div className="rightCard">
          <div className="container">
              <h4 className='text-center mb-4'>Kontaktingizni qoldiring</h4>
              <div className="form">
                <div className="">
                  <p className="m-0">Ismingiz</p>
                  <input className='input-group-number inputs-aloqa form-control' type="text" />
                </div>
                <div className="my-3">
                  <p className="m-0">Telefon raqamingiz</p>
                  <input className='input-group-number inputs-aloqa form-control' type="number" placeholder="+998 90 123 45 67" />
                </div>
                <div className="mt-4">
                  <textarea class="form-control" rows={7} placeholder="Izoh:" id="floatingTextarea">
                  </textarea>
                </div>
                <div className="d-flex justify-content-center mt-3">
                <button className='btn Aloqa_btn'>Yuborish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aloqa;
