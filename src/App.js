
import NavBar from "./components/HomeComponents/NavBar/NavBar";
import Heder from "./components/HomeComponents/Header/Heder";
import Kompoaniya from "./components/HomeComponents/Kompaniya/Kompoaniya";
import Ishlatilishi from "./components/HomeComponents/Ishlatilishi/Ishlatilishi";
import Accardion from "./components/HomeComponents/Accardion/Accardion";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'
import Index from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
