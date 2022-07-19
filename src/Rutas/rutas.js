import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../paginas/home";
import Formulario from "../paginas/formulario";
import Control from "../paginas/Control";
import Layouts from "../componentes/inicio/Layouts/Layouts";
import Registrotab from "../paginas/Registrotab"
import Intercobro from "../paginas/intercobro"
import EscrirbirCo from "../paginas/EscrirbirCo";
import Aplicacion from "./aplicacion";
import Escrirbir from "../paginas/Escrirbir";

function rutas() {
  return (
    <div>
      <Router>
        <Layouts>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/for" element={<Formulario />} />
            <Route exact path="/cont" element={<Control />} />
            <Route exact path="/regis" element={<Registrotab />} />
            <Route exact path="/int" element={<Intercobro />} />
            <Route exact path="/escc" element={<EscrirbirCo />} />
            <Route exact path="/apli" element={<Aplicacion />} />
            <Route exact path="/ecb" element={<Escrirbir />} />
            <Route exact path="/foredit/:id" element={<Formulario />} />
          </Routes>
        </Layouts>
      </Router>
    </div>
  );
}

export default rutas;
