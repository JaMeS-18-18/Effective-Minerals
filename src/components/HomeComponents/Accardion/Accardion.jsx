import React from 'react'
import "../Accardion/Accardion.css"

export default function Accardion() {
  return (
    <div className="container">

    <div className="row">
      <div className="col-12">
        <div className="box">
          <div className="accordion my-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Kampaniya bilan qanday aloqaga chiqsam boladi ?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Biz bilan bogʼlanish uchun ushbu saytdagi nomerga telefon qilishingiz mumkin . Agar operator javob bera olmasa yoki ish vaqtiga toʼgʼri kelmasa Saytimizdagi malumotnomani toldiring bizni hodimlar albatta siz bilan bogʼlanadi
                </div>
              </div>
            </div>
        
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingthree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                Mahsulotingizni yetkazib berish hizmati mavjudmi ?
                </button>
              </h2>
              <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingthree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                Mahsulotingizni yetkazib berish hizmati mavjudmi ?
                </button>
              </h2>
              <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
