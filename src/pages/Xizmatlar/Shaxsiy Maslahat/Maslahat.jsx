import React from 'react'
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
export default function Maslahat() {
  return (
    <div>
      <ScreenHeader img={HeadImage} title={"Shaxsiy maslahat"}/>
        <div className="container">
          <div className="home_card">
            <h3>Superfosfat oʼgʼitining ishlatilishiga doir</h3>
            <div className='subtitles'>
            <p>
            Oddiy yoki ammonizatsiyalangan superfosfat oʼgʼiti sitrat eritmalaridan eriydigan samarali fosforli oʼgʼitlar hisoblanadi. Uning donadorlashtiligan turlari qoniqarli fizik-kimyoviy xossalariga ega boʼlib tuproq muhitini nordonlashtirmaydi. <br />
<br />
            Oʼgʼit xilma-xil tuproqlarda va har xil qishloq xoʼjaligi ekinlarini, jumladan sabzavotlarni, poliz ekinlarini, mevali va dekorativ daraxtlarni oziqlantirishga qullanilib, u himoyalangan tuproq sharoitlarida ham ishlatilishiga moʼljallangan.
            </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-4 animate__animated animate__slideInLeft">
            <Cards img={Card1} title={"        Tuproqning agʼdarilish paytida kech kuz yoki erta bahor fasllarida madaniylashtirilgan 10 m2 yer maydoni uchun 300-400 grammdan yoki madaniylashtirilmagan 10 m2 maydon uchun 500-600 grammdan;"}/>
            </div>
            <div className="col-md-6 my-4 animate__animated animate__slideInRight">
            <Cards img={Card2} title={"        Oʼsimliklarni qator oraligʼiga ularni ekish davrida 1 m uzunlikdagi qator uchun 4-5 grammdan, yoki bitta ekish chuqurchasi uchun 2-3 grammdan."}/>
            </div>

            <div className="col-md-6 my-4 animate__animated animate__slideInLeft">
            <Cards img={Card3} title={"        Oʼsimliklarning rivojlanish davrlarida 10 m2 ekin maydoniga donalashtirilgan (quruq) turidan 80-100 grammdan va 10 litr suvda suyultirilgan suspenziyasidan oʼshancha maydonga 50-60 grammdan"}/>
            </div>
            <div className="col-md-6 my-4 animate__animated animate__slideInRight">
            <Cards img={Card4} title={"        Koʼp yillik mevali daraxtlar uchun koʼchatlarni ekish paytida har bitta koʼchat chuqurchasi hisobiga 500-600 grammdan va ularning rivojlanish paytlarida erta bahorda va gullagandan keyin koʼchatlar ekilgan 1 m2 maydonga 20-50 grammdan;"}/>
            </div>
            
            <div className="col-md-6 my-4 animate__animated animate__slideInLeft">
            <Cards img={Card5} title={"        Issiqxonalar sharoitlarida yerni ishlov berish ammallari bilan birgalikda har 1 m2 maydon uchun 40-60 grammdan"}/>
            </div>
            <div className="col-md-6 my-4 animate__animated animate__slideInRight">
            <Cards img={Card6} title={"        Superfosfat oʼgʼitini kech kuzdagi yer ishlov berish paytida kaliyli oʼgʼitlar bilan birga va erta bahor va yoz oylari mavsumlarida azotli va kaliyli oʼgʼitlar bilan birga berilishi tavsiya qilinadi."}/>
            </div>

            <hr className='my-5' />

            <div className="col-md-6 my-4 animate__animated animate__slideInLeft">
            <Cards img={Card7} head={"Kartoshka"} title={"        Fosfatlar kuzda yoki bahorda tayyorgarlik ishlarida qoʼllaniladi. Goʼng chiqarishning granulyatsiya qilingan shakli yanada samarali hisoblanadi. Har bir quduqqa granulalar qoʼshiladi. 3-4 gramm. Bundan tashqari, tezligida yerga tarqalib ketishingiz mumkin 20 gr. 1 m2 uchun."}/>
            </div>
            <div className="col-md-6 my-4 animate__animated animate__slideInRight">
            <Cards img={Card8} head={"Pomidorlar"} title={"        Superfosfat oʼgʼitini kech kuzdagi yer ishlov berish paytida kaliyli oʼgʼitlar bilan birga va erta bahor va yoz oylari mavsumlarida azotli va kaliyli oʼgʼitlar bilan birga berilishi tavsiya qilinadi."}/>
            </div>

            <div className="col-md-6 my-4 animate__animated animate__slideInLeft">
            <Cards img={Card9} head={"Qovoq ekinlari"} title={"        Yerni yekishdan oldin tuproqni oʼgʼitlashda yerni minerallar bilan boyitadi 30 gr. 1 m2 uchun. Suvga oldindan suyultiriladigan yer-xotin superfosfat yordamida yosh asirlarni faol rivojlanish bosqichida. Yashillarni qayta ishlashda yeritma tushmasligi kerak"}/>
            </div>
            <div className="col-md-6 my-4 animate__animated animate__slideInRight">
            <Cards img={Card10} head={"Qulupnay"} title={"        Yechimni tayyorlash uchun superfosfat olinadi va suv teng nisbatda boʼladi va suyuqlik qatorlar orasiga qoʼshiladi. Kuzda yoki yerta bahorda siz qushlarning qorin boʼshligʼida gumus yoki infüzyon aralashmasi qoʼsha olasiz. Dozalash: 60 gr. mineral kompleksi 5 kg chirindi, 15 gr. 1 m2 uchun kaliy tuzi."}/>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
  )
}
