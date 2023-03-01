import React, { useState } from 'react'
import "../NavBar/NavBar.css"
import Logo from '../../../assets/Home/logonew.png'
export default function NavBar() {
    const [show, setShow] = useState('home')
    // function active(){
    //     setshow("home")
    // }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} className="logoImg" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item  rounded-2 ${show == 'home' ? 'activ' : ''}`} onClick={() => setShow('home')}>
                                <a className={`nav-link   ${show == 'home' ? 'activeItem' : ''}`} aria-current="page" href="#">Aсосий</a>
                            </li>

                            <li className={`nav-item rounded-2 px-3  ${show == 'biz' ? 'activ' : ''}`} onClick={() => setShow('biz')}>
                                <a className={`nav-link  ${show == 'biz' ? 'activeItem' : ''}`} aria-current="page" href="#">Биз Ҳақимизда</a>
                            </li>

                            <li className={`nav-item   rounded-2 px-3  ${show == 'xizmatlar' ? 'activ' : ''}`} onClick={() => setShow('xizmatlar')}>
                                <a className={`nav-link  ${show == 'xizmatlar' ? 'activeItem' : ''}`} aria-current="page" href="#">Хизматлар</a>
                            </li>

                            <li className={`nav-item  rounded-2 px-3  ${show == 'maxsulot' ? 'activ' : ''}`} onClick={() => setShow('maxsulot')}>
                                <a className={`nav-link  ${show == 'maxsulot' ? 'activeItem' : ''}`} aria-current="page" href="#">Маҳсулот</a>
                            </li>

                            <li className={`nav-item  rounded-2 px-3  ${show == 'aloqa' ? 'activ' : ''}`} onClick={() => setShow('aloqa')}>
                                <a className={`nav-link  ${show == 'aloqa' ? 'activeItem' : ''}`} aria-current="page" href="#">Aлоқа</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">УЗ/РУ</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
