import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/global.css'
import About from './pages//About/About';
import Maslahat from './pages/Xizmatlar/Shaxsiy Maslahat/Maslahat';
import Mahsulot from './pages/Mahsulot/Mahsulot';
import Savollar from './pages/Xizmatlar/Savollar/Savollar';
import 'animate.css';
import Yuklash from './pages/Xizmatlar/Yuklab olish/Yuklash';
import Aloqa from './pages/Aloqa/Aloqa';
import Footer from './components/Footer/Footer';
import NavBar from './components/HomeComponents/NavBar/NavBar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Index from './pages/Home';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Index/>}/>
          <Route path='/About' element={<About />} />
          <Route path='/Mahsulot' element={<Mahsulot />} />
          <Route path='/Maslahat' element={<Maslahat />} />
          <Route path='/Savollar' element={<Savollar />} />
          <Route path='/Yuklash' element={<Yuklash />} />
          <Route path='/Aloqa' element={<Aloqa />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
