import React from 'react'
import HeadImage from '../../../assets/ScreenHeader/Header2.png'
import Footer from '../../../components/Footer/Footer'
import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader'
import YuklashCard from '../../../components/YuklashCard/YuklashCard'

export default function Yuklash() {
  return (
    <div>
      <ScreenHeader title={"Yuklab Olish"} img={HeadImage}/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
            <div className="col-md-6">
          <YuklashCard title={"Superfosfat oʼgʼitini ishlatishka doir qollanma"} icon={<i class="bi bi-download"></i>} />
            </div>
          </div>
        </div>
    </div>
  )
}
