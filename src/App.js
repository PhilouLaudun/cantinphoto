import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import PortFolio from './pages/PortFolio';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Test from "./pages/Test";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/portfolio" exact element={<PortFolio />} />
      <Route path="/price" exact element={<Prices />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/test" exact element={<Test />}/>
      <Route path="/*" exact element={<Home />} />
    </Routes>
  );
}

export default App;
