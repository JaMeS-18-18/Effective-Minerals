import React from 'react'
import "../Ishlatilishi/Ishlatilishi.css"
import irasm1 from "../../../assets/Home/irasm1.png"
import irasm2 from "../../../assets/Home/irasm2.png"
import irasm3 from "../../../assets/Home/irasm3.png"
import irasm4 from "../../../assets/Home/irasm4.png"
import rootl from "../../../assets/Home/rootl.png"
import rootr from "../../../assets/Home/rootr.png"
import {useTranslation} from 'react-i18next'

export default function Ishlatilishi() {
  const {t} = useTranslation();

    return (
        <div className='container-fluid Ishlatilishistyle'>
            <div className=' py-5'>
                <h3 className='text-center  wow animate__animated animate__fadeInDown h3-sarlavha text-white fs-1'>
                    {t("H_ishlatish")}
                </h3>
                <div className='row pt-3 '>
                    <div className='col-lg-6 col-md-12 col-md-12 '>
                    </div>
                    <div className='col-lg-6 col-md-12 col-md-12  wow animate__animated animate__fadeInRight d-flex justify-content-end'>
                        <img src={rootr} alt='img' className='img-fluid' />
                    </div>

                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInLeft col-md-12 d-flex justify-content-center ps-5 pe-5 pe-lg-0'>
                        <img src={irasm1} alt='img' className='img-fluid' />

                    </div>
                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInLeft col-md-12 d-flex align-items-center pe-5 ps-5 ps-lg-0'>
                        <p className='text-white fs-3 text-center text-lg-start mt-4 mt-lg-0 fs-6'>
                        {t("H_tuproq")}
                        </p>

                    </div>
                </div>

                <div className='row pt-3 '>
                    <div className='col-lg-6 col-md-12 col-md-12  wow animate__animated animate__fadeInLeft '>
                        <img src={rootl} alt='img' className='img-fluid' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-md-12 d-flex justify-content-end'>
                    </div>

                    <div className='col-lg-6 col-md-12 col-md-12 d-flex  wow animate__animated animate__fadeInRight justify-content-center ps-5 pe-5 pe-lg-0 order-1 order-lg-0  d-flex align-items-center'>

                        <p className='text-white fs-3 text-center text-lg-start mt-4 mt-lg-0 fs-6'>
                        {t("H_O'simlik")}
                        </p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-md-12  wow animate__animated animate__fadeInRight d-flex justify-content-center ps-5 pe-5 pe-lg-0 order-0 order-lg-1'>
                        <img src={irasm2} alt='img' className='img-fluid' />

                    </div>
                </div>

                <div className='row pt-3 '>
                    <div className='col-lg-6 col-md-12 col-md-12  '>
                    </div>
                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInRight col-md-12 d-flex justify-content-end'>
                        <img src={rootr} alt='img' className='img-fluid' />
                    </div>

                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInLeft col-md-12 d-flex justify-content-center ps-5 pe-5 pe-lg-0'>
                        <img src={irasm3} alt='img' className='img-fluid' />

                    </div>
                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInLeft col-md-12 d-flex align-items-center pe-5 ps-5 ps-lg-0'>
                        <p className='text-white fs-3 text-center text-lg-start mt-4 mt-lg-0 fs-6'>
                        {t("H_ko'pyillik")}

                        </p>

                    </div>

                    <div className='row pt-3 '>
                    <div className='col-lg-6 col-md-12  wow animate__animated animate__fadeInLeft col-md-12  '>
                        <img src={rootl} alt='img' className='img-fluid' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-md-12 d-flex justify-content-end'>
                    </div>

                    <div className='col-lg-6 col-md-12 col-md-12 wow animate__animated animate__fadeInRight d-flex justify-content-center ps-5 pe-5 pe-lg-0 order-1 order-lg-0 d-flex align-items-center'>

                        <p className='text-white fs-3 text-center text-lg-start mt-4 mt-lg-0 fs-6 '>
                        {t("H_issiqhona")}
                        </p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-md-12 wow animate__animated animate__fadeInRight d-flex justify-content-center ps-5 pe-5 pe-lg-0 order-0 order-lg-1'>
                        <img src={irasm4} alt='img' className='img-fluid' />

                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}
