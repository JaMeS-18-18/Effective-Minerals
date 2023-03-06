import React from 'react'
import Button from '../../ui/Button'
import "../Kompaniya/Kompaniya.css"
import kompPhoto  from "../../../assets/Home/Kompaniyaphoto.png"
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

export default function Kompoaniya() {
  const {t} = useTranslation();

    return (
        <div className='container-fluid  Okampaniya' >
            <div className='container'>
                <div className='row  py-5'>
                    <div className='col-lg-6 col-md-12 col-sm-12  h-auto d-flex flex-column justify-content-center  wow animate__animated animate__fadeInLeft'>
                        <h3 className='oKompaniyaTitle mb-lg-4 mb-md-2 mb-sm-2 text-center text-lg-start fs-1'>
                            {t("H_haqida")}
                        </h3>
                        <p className='mb-2 w-100 oKompaniyaP pe-lg-5 text-center text-lg-start  my-3'>
                        {t("H_haqidaText")}
                        </p>
                        <div  onClick={() => {
                            localStorage.setItem("Link", "biz")
                            window.location.reload()
                           }} className="d-flex justify-content-center justify-content-lg-start mb-3">
                                <Link to={"/about"}>
                                    <Button title = {t('button')} />
                                </Link>
                        </div>

                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-3 pt-lg-0  wow animate__animated animate__fadeInRight' >
                        <img src={kompPhoto} className = "kompimg img-fluid "  alt='Img'/>

                    </div>
                </div>
            </div>
        </div>
    )
}
