import React from 'react'
import "../Accardion/Accardion.css"
import {useTranslation} from 'react-i18next'

export default function Accardion() {
  const {t} = useTranslation()

  return (
    <div className="container">

    <div className="row">
      <div className="col-12">
          <h3 className='text-center title fs-1'>{t("Savol_t")}</h3>
        <div className="box p-3 p-lg-5 p-md-4">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button p-3 p-lg-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {t("A_1")}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body p-3 p-lg-4">
                {t("A_1_j")}
                </div>
              </div>
            </div>
        
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingthree">
                <button className="accordion-button p-3 p-lg-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                {t("A_2")}
                </button>
              </h2>
              <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                <div className="accordion-body p-3 p-lg-4">
                {t("A_2_j")}
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingthree">
                <button className="accordion-button p-3 p-lg-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                {t("A_3")}
                </button>
              </h2>
              <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                <div className="accordion-body p-3 p-lg-4">
                {t("A_3_j")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}
