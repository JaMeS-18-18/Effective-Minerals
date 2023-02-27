import React from 'react'
import AboutIMage1 from '../../assets/About/About1.png'
import AboutIMage2 from '../../assets/About/About2.png'
import AboutIMage3 from '../../assets/About/About3.png'
import AboutIMage4 from '../../assets/About/About4.png'
import Sertficate from '../../assets/About/Sertificate.png'
import Footer from '../../components/Footer/Footer'
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader'
import HeadImage from '../../assets/ScreenHeader/Header1.png'
import './About.css'
export default function About() {
  return (
    <div>
      <ScreenHeader img={HeadImage} title={"Effictive Minerals"}/>
      <div className="container">
      <div className="row py-5 ">
        <div className=" col-12 col-md-8">
          <div className="about  ">
            <h3 className="title text-center mb-3">
              Biz haqimizda
            </h3>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero minus, placeat ipsa adipisci est
              voluptatem voluptatibus. Dolore, nisi ab eligendi, dolores corrupti impedit voluptate nemo nostrum ipsum ea iure blanditiis necessitatibus expedita cum corporis iusto aperiam, voluptatem et ipsa reprehenderit reiciendis illo officia architecto! Dolorem accusantium repudiandae laboriosam molestias ad commodi maxime ipsa explicabo facilis quidem quod tempora numquam, iusto quia quae nesciunt illum quisquam. Sed, quia aliquam! Officia quibusdam obcaecati, quod modi fugiat porro
              architecto. Quos doloremque vitae, hic quod nisi earum itaque natus animi tempore, ab cum impedit suscipit fugiat molestiae quasi culpa tenetur? Odit, alias quasi? Excepturi aperiam id earum, ipsa nostrum quis, facere, voluptas dolorem molestiae est qui! Ipsa doloremque at repellendus nesciunt reprehenderit dolor debitis, ullam, quisquam delectus quos nulla sed officiis porro eaque nam, et error cupiditate! Officiis aperiam quibusdam nostrum repellat! Inventore a maiores beatae repellat dolorum maxime doloremque amet cupiditate labore natus. Magnam non suscipit vero, rem possimus quam sit blanditiis eligendi natus? Eveniet velit dolore nihil corporis unde ut recusandae tempore, temporibus impedit corrupti similique aut id dignissimos porro explicabo cupiditate accusamus maxime sapiente consequuntur tenetur ea consectetur tempora nostrum quos. Quibusdam nostrum quod neque suscipit, obcaecati perspiciatis, accusantium mollitia inventore voluptate ab ex nam, impedit iste illo alias reprehenderit adipisci aperiam eos quia eaque! Voluptas, qui suscipit
              quibusdam assumenda dolor commodi odit pariatur, dignissimos veritatis molestiae atque ! Sit minima rerum reprehenderit impedit vel culpa dignissimos hic veniam ad perspiciatis consequatur quas nobis enim totam dolore maiores assumenda recusandae, nam magni tempora eaque! Fugit, repellendus doloremque reiciendis laudantium, soluta, dolores qui dolorum aperiam temporibus corrupti inventore eveniet deserunt. Quibusdam ea asperiores cupiditate ab suscipit perspiciatis ducimus est laboriosam repellendus ipsum nemo fugit aut, unde illo omnis, tenetur qui. Reiciendis assumenda, excepturi commodi incidunt ratione quod ad distinctio.
            </p>
          </div>
        </div>
        <div className=" col-12 col-md-4  ">
          <div className="about_image">
            <div>
              <img className='img-fluid' src={AboutIMage1} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage2} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage3} alt="" />
              <hr />
            </div>
            <div>
              <img className='img-fluid' src={AboutIMage4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Yutuqlar">
        <h1 className='title fw-bold animate__slideInDown animate__animated'>Bizning Yutuqlar</h1>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className='cardimage animate__backInLeft animate__animated '>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInLeft animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInLeft animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
          <div className="cardimage2 order-3 order-lg-2 col-md-6 col-lg-4">
            <div className='cardimage animate__backInUp animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInUp animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInUp animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
          <div className=" order-2 order-lg-3 col-md-6 col-lg-4">
            <div className='cardimage animate__backInRight animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInRight animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
            <div className='cardimage animate__backInRight animate__animated'>
              <img className='img-fluid' src={Sertficate} alt="" />
              <div className='d-flex yutuqlar_text justify-content-center align-items-center'>
                <span className='title  fs-4 mt-2'>Yuklab olish</span>
                <i class="bi bi-download fs-3 mx-2 icons"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
