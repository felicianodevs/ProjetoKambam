import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../assets/Page-Home/Home";
import AreaUser from "../assets/AreaUser/AreaUser";
import Cadastro from "../assets/Page-Home/Cadastro";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AreaUser" element={<AreaUser />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
