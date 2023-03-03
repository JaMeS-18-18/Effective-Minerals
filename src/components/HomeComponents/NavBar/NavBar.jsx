import React, { useState } from 'react'
import "./NavBar.css"
import Logo from '../../../assets/Home/logonew.png'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

export default function NavBar() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (til) => {
        i18n.changeLanguage(til)
    }

    const [show, setShow] = useState('home')
    // function active(){
    //     setshow("home")
    // }
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
                                <li className={`nav-item  rounded-2 ${show == 'home' ? 'activ' : ''}`} onClick={() => setShow('home')}>
                                    <a className={`nav-link   ${show == 'home' ? '' : ''}`} aria-current="page">{t("Nasosiy")}</a>
                                </li>
                            </Link>

                            <Link to={'/about'}>
                                <li className={`nav-item rounded-2 px-3  ${show == 'biz' ? 'activ' : ''}`} onClick={() => setShow('biz')}>
                                    <a className={`nav-link  ${show == 'biz' ? '' : ''}`} aria-current="page" href="#">Биз Ҳақимизда</a>
                                </li>
                            </Link>

                            {/* <Link to={"/"}>
                                <li className={`nav-item   rounded-2 px-3  ${show == 'xizmatlar' ? 'activ' : ''}`} onClick={() => setShow('xizmatlar')}>
                                    <a className={`nav-link  ${show == 'xizmatlar' ? '' : ''}`} aria-current="page" href="#">Хизматлар</a>
                                </li>
                            </Link> */}
                            <li className={`nav-item dropdown  rounded-2 px-3  ${show == 'xizmatlar' ? 'activ' : ''}`} onClick={() => setShow('xizmatlar')}>
                                <a className={`nav-link dropdown-toggle  ${show == 'xizmatlar' ? '' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Хизматлар
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={'/Maslahat'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">Shaxsiy maslahat</a></li>
                                    </Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <Link to={'/Savollar'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">tez-tez so'raladigan <br /> savollar</a></li>
                                    </Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <Link to={'/Yuklash'}>
                                        <li className='dropLinkfather'><a className={`dropLink dropdown-item`} href="#">Yuklab olish</a></li>
                                    </Link>
                                </ul>
                            </li>

                            <li className={`nav-item  rounded-2 px-3  ${show == 'maxsulot' ? 'activ' : ''}`} onClick={() => setShow('maxsulot')}>
                                <a className={`nav-link  ${show == 'maxsulot' ? '' : ''}`} aria-current="page" href="#">Маҳсулот</a>
                            </li>

                            <Link to={"/Aloqa"}>
                                <li className={`nav-item  rounded-2 px-3  ${show == 'aloqa' ? 'activ' : ''}`} onClick={() => setShow('aloqa')}>
                                    <a className={`nav-link  ${show == 'aloqa' ? '' : ''}`} aria-current="page" href="#">Aлоқа</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">
                                    <button onClick={() => changeLanguage("uz")}>УЗ</button>
                                        /
                                     <button onClick={() => changeLanguage("ru")}>РУ</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
