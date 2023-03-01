
import "../src/assets/global.css"
import NavBar from "./components/HomeComponents/NavBar/NavBar";
import Heder from "./components/HomeComponents/Header/Heder";
import Kompoaniya from "./components/HomeComponents/Kompaniya/Kompoaniya";
import Ishlatilishi from "./components/HomeComponents/Ishlatilishi/Ishlatilishi";
import Accardion from "./components/HomeComponents/Accardion/Accardion";


function App() {
  return (
    <div>
      <NavBar/>
      <Heder/>
      <Kompoaniya/>
      <Ishlatilishi/>
      <Accardion/>
    </div>
  );
}

export default App;
