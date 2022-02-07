import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import PortFolio from './pages/PortFolio';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Test2 from "./pages/Test2";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/portfolio" exact element={<PortFolio />} />
      <Route path="/price" exact element={<Prices />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/test" exact element={<Test2 />}/>
      <Route path="/*" exact element={<Home />} />
    </Routes>
  );
}

export default App;
