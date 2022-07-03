import React from 'react'
import Imagen from '../img/imagen.png'

function formulario() {
  return (
    <div>
      <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VirtualCloset</a>
  </div>
</nav>
<div>
<h1>
<p class="text-center">Información del Producto</p>
</h1>
</div>
<div class="text-center">
<div class="input-group mb-3 mt-5 container mx-auto">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Imagen</label>
</div>
</div>

<div class="input-group mb-3 mt-5 container mx-auto">
  <input type="text" class="form-control" placeholder="Nombre del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3 container mx-auto">
  <input type="text" class="form-control" placeholder="Código" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>

<div class="input-group mb-3 container mx-auto">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" placeholder="Precio" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3 container mx-auto">
  <span class="input-group-text">Cant.</span>
  <input type="text" class="form-control" placeholder="Cantidad" aria-label="Amount (to the nearest dollar)"/>
</div>
<div class="botones mt-5 md-5">
  <button type="button" class="btn btn-danger float-start">Cancelar</button>
  <button type="button" class="btn btn-primary float-end">Guardar</button>
</div>
    </div>
    

    
  )
}

export default formulario