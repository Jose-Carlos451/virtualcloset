import React from "react";
import Rutas from "./Rutas/rutas"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Producto from './paginas/formulario'


function App() {
  return (
      <div>
        <Rutas/>
        <ToastContainer/>
      </div>
  );
}

export default App;
