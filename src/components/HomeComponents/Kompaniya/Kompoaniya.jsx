import React from 'react'
import Button from '../../ui/Button'
import "../Kompaniya/Kompaniya.css"
import kompPhoto  from "../../../assets/Home/Kompaniyaphoto.png"

export default function Kompoaniya() {
    return (
        <div className='container-fluid  Okampaniya' >
            <div className='container'>
                <div className='row  py-5'>
                    <div className='col-lg-6 col-md-12 col-sm-12  h-auto ass'>
                        <h3 className='oKompaniyaTitle mb-lg-4 mb-md-2 mb-sm-2 text-center text-lg-start'>
                            Компания ҳақида
                        </h3>
                        <p className='mb-5 w-100 oKompaniyaP pe-lg-5 text-center text-lg-start '>
                             Аммофос-Максам - одно из крупнейших предприятий Республики Узбекистан, введенное в строй в 1969 году 
                            и производящее в настоящее время сложные азотно-фосфорные удобрения на базе фосфоритов Кызылкумского 
                            месторождения.Предприятие входит в состав Государственной акционерной компании Узкимёсаноат республики 
                            Узбекистан.
                        </p>
                        <div className='mt-5 pt-lg-5 pt-md-0 pt-sm-0  d-flex justify-content-center justify-content-lg-start'>
                        <Button  title = "Batafsil" />
                        </div>

                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-sm-5' >
                        <img src={kompPhoto} className = "kompimg img-fluid "  alt='Img'/>

                    </div>
                </div>
            </div>
        </div>
    )
}
