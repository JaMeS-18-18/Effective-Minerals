import React, { useEffect } from 'react'
import Footer from '../../../components/Footer/Footer'
import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader'
import HeadImage from '../../../assets/ScreenHeader/Header2.png'
import "./Maslahat.css"
import Cards from '../../../components/Cards/Cards'
import Card1 from '../../../assets/Cards/Card1.png'
import Card2 from '../../../assets/Cards/Card2.png'
import Card3 from '../../../assets/Cards/Card3.png'
import Card4 from '../../../assets/Cards/Card4.png'
import Card5 from '../../../assets/Cards/Card5.png'
import Card6 from '../../../assets/Cards/Card6.png'
import Card7 from '../../../assets/Cards/Card7.png'
import Card8 from '../../../assets/Cards/Card8.png'
import Card9 from '../../../assets/Cards/Card9.png'
import Card10 from '../../../assets/Cards/Card10.png'
import WOW from 'wowjs';
import {useTranslation} from 'react-i18next'

export default function Maslahat() {
useEffect(() => {
  new WOW.WOW({
    live: false
  }).init();
}, []);
const {t} = useTranslation()


  return (
    <div>
      <ScreenHeader img={HeadImage} title={t("Sh_title")}/>
        <div className="container">
          <div className="home_card">
            <h3>{t("Sh_subtitle")}</h3>
            <div className='subtitles'>
            <p>
              {t("Sh_info")}
            </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInLeft">
            <Cards img={Card1} title={t("Sh_card1")}/>
            </div>
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInRight">
            <Cards img={Card2} title={t("Sh_card2")}/>
            </div>

            <div className="col-md-6 my-4 animate__animated wow  animate__slideInLeft">
            <Cards img={Card3} title={t("Sh_card3")}/>
            </div>
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInRight">
            <Cards img={Card4} title={t("Sh_card4")}/>
            </div>
            
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInLeft">
            <Cards img={Card5} title={t("Sh_card5")}/>
            </div>
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInRight">
            <Cards img={Card6} title={t("Sh_card6")}/>
            </div>

            <hr className='my-5' />

            <div className="col-md-6 my-4 animate__animated wow  animate__slideInLeft">
            <Cards img={Card7} head={t("Sh_card7_title")} title={t("Sh_card7")}/>
            </div>
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInRight">
            <Cards img={Card8} head={t("Sh_card8_title")} title={t("Sh_card8")}/>
            </div>

            <div className="col-md-6 my-4 animate__animated wow  animate__slideInLeft">
            <Cards img={Card9} head={t("Sh_card9_title")} title={t("Sh_card9")}/>
            </div>
            <div className="col-md-6 my-4 animate__animated wow  animate__slideInRight">
            <Cards img={Card10} head={t("Sh_card10_title")} title={t("Sh_card10")}/>
            </div>
          </div>
        </div>
      </div>
  )
}
