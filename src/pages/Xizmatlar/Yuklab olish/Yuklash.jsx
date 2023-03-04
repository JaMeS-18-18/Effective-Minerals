import React from 'react'
import HeadImage from '../../../assets/ScreenHeader/Header2.png'
import Footer from '../../../components/Footer/Footer'
import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader'
import YuklashCard from '../../../components/YuklashCard/YuklashCard'
import { saveAs } from 'file-saver';
import Pdf1 from '../../../assets/Pdf/1.pdf';
import Pdf2 from '../../../assets/Pdf/2.pdf';
import Pdf3 from '../../../assets/Pdf/3.pdf';
import Pdf4 from '../../../assets/Pdf/4.pdf';
import Pdf5 from '../../../assets/Pdf/5.pdf';
import Pdf6 from '../../../assets/Pdf/6.pdf';

export default function Yuklash() {
  const downloadPdf = (num) => {
    fetch(num)
      .then(response => response.blob())
      .then(blob => saveAs(blob, 'EffictiveMinerals.pdf'))
      .catch(error => console.log(error));
  };
  return (
    <div>
      <ScreenHeader title={"Yuklab Olish"} img={HeadImage}/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf1)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf2)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf3)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf4)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf5)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
            <div className="col-md-6">
              <div onClick={() => downloadPdf(Pdf6)} className="">
                <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
