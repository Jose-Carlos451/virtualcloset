import React from 'react'
import {Link} from 'react-router-dom'
import Control from './Control'
import Gift from '../img/hola-hello.gif'

function home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">VirtualCloset</a>
  </div>
</nav>
<div class="d-grid gap-2 col-5 mx-auto mt-5">
  <button class="btn btn-success mt-5" type="button">Cobrar Producto</button>
  <button class="btn btn-info mt-5" type="button">Registrar Producto</button>
  <button class="btn btn-warning mt-5" type="button">Administrador</button>
</div>
<img src={Gift} class="rounded mx-auto d-block"/>

</div>

    
  )
}

export default home