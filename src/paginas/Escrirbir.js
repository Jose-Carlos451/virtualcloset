import React from "react";
import { Link } from "react-router-dom";
//Este es la pestaña para ingresar el codigo para registrar
function Escrirbir() {
  return (
    <div class="fondo">
      <h1 class="text-center">Ingrese el código</h1>
      <form class="row g-3">
      <div class="mb-3">
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el código"/>
</div>
      <div class="botones mt-5 md-5">
        <Link to="/apli" class="btn btn-danger float-start">
          Cancelar
        </Link>
        <Link to="/for" class="btn btn-primary float-end">
          Aceptar
        </Link>
      </div>
      </form>
    </div>
  );
}

export default Escrirbir;
