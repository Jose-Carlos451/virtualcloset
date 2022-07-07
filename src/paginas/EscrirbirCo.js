import React from 'react'
import { Link } from "react-router-dom";
//Esta es la pestaña para ingresar codigo pero de cobro

function EscrirbirCo() {
  return (
    <div>
        <h1 class="text-center">Ingrese el código</h1>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el código"/>
      <div class="input-group mb-5 container mx-auto">
        Debe escribir el codigo correctamente
      </div>
      <div class="botones mt-5 md-5">
        <Link to="/int" class="btn btn-danger float-start">
          Cancelar
        </Link>
        <Link to="..." class="btn btn-primary float-end">
          Aceptar
        </Link>
      </div>
    </div>
  )
}

export default EscrirbirCo