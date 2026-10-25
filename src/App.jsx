import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import RandomBattle from "./pages/RandomBattle";

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/RandomBattle" element={<RandomBattle />} />
      </Routes>
  );
}

export default App
