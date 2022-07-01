import React from 'react'
import Formulario from './paginas/formulario'



function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">VirtualCloset</a>
  </div>
</nav>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="cobrar btn-success" type="button">Cobrar Producto</button>
  <button class="registrar btn-warning" type="button">  Registrar Producto</button>
  <button class="administrador btn-primary" type="button">Administrador</button>
</div>
<Formulario/>
</div>
 
    
  )
}

export default App
