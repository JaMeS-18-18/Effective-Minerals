import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import Logo from '../../../assets/Home/logonew.png'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

export default function NavBar() {
    const {t, i18n} = useTranslation();
    const [til, settil] = useState(true);
    const changeLanguage = (tils) => {
        if(tils == "uz") settil(true)
        else settil(false)
        i18n.changeLanguage(tils)
    }
    
useEffect(() => {
   let page =  localStorage.getItem("Link")
   if (page) GoPage(page) 
   else GoPage("home")
}, []);

    const [show, setShow] = useState('home')

    function GoPage(link){
        localStorage.setItem("Link", link)
        let page =  localStorage.getItem("Link")
        if (page) {
            setShow(page)
        }
        else {
            setShow(link)
        }
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} className="logoImg" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <Link to={'/'}>
                                <li className={`nav-item  rounded-2 ${show == 'home' ? 'activ' : ''}`} onClick={() => GoPage('home')}>
                                    <a className={`nav-link   ${show == 'home' ? '' : ''}`} aria-current="page">{t("N_asosiy")}</a>
                                </li>
                            </Link>

                            <Link to={'/about'}>
                                <li className={`nav-item rounded-2 px-3  ${show == 'biz' ? 'activ' : ''}`} onClick={() => GoPage('biz')}>
                                    <a className={`nav-link  ${show == 'biz' ? '' : ''}`} aria-current="page" href="#">{t("N_haqida")}</a>
                                </li>
                            </Link>
                            <li className={`nav-item dropdown  rounded-2 px-3  ${show == 'xizmatlar' ? 'activ' : ''}`} onClick={() => GoPage('xizmatlar')}>
                                <a className={`nav-link dropdown-toggle  ${show == 'xizmatlar' ? '' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t("N_hizmat")}
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={'/Maslahat'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">{t("N_maslahat")}</a></li>
                                    </Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <Link to={'/Savollar'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">{t("N_savollar")}</a></li>
                                    </Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <Link to={'/Yuklash'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">{t("N_yuklash")}</a></li>
                                    </Link>
                                </ul>
                            </li>
                            <Link to={'/Mahsulot'}>
                            <li className={`nav-item  rounded-2 px-3  ${show == 'maxsulot' ? 'activ' : ''}`} onClick={() => GoPage('maxsulot')}>
                                <a className={`nav-link  ${show == 'maxsulot' ? '' : ''}`} aria-current="page" href="#">{t("N_mahsulot")}</a>
                            </li>
                            </Link>

                            <Link to={"/Aloqa"}>
                                <li className={`nav-item  rounded-2 px-3  ${show == 'aloqa' ? 'activ' : ''}`} onClick={() => GoPage('aloqa')}>
                                    <a className={`nav-link  ${show == 'aloqa' ? '' : ''}`} aria-current="page" href="#">{t("N_aloqa")}</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                    <button className={`btn btn-light ${til ? "til_btn" : ""}`} onClick={() => changeLanguage("uz")}>УЗ</button>
                                        <div className="mx-1">/</div>
                                     <button  className={`btn btn-light ${til ? "" : "til_btn"}`} onClick={() => changeLanguage("ru")}>РУ</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
