import React from 'react'
import { Link } from "react-router-dom";

function aplicacion() {
  return (
    <div class="fondo">
    <div class="d-grid gap-2 col-6 mx-auto mt-5">
  <button class="btn btn-success" type="button">Escanear código</button>
  <Link to="/ecb" class="btn btn-warning" type="button">Ingresar código</Link>
</div>
<div class="botones mt-5 md-5">
<Link to="/" class="btn btn-light float-start">
Atras
</Link>
  
</div>
    </div>
  )
}

export default aplicacion