import React from 'react'

function Control() {
  return (
    <div>
        <div class="card">
  <h5 class="card-header">VirtualCloset</h5>
  <div class="card-body">
    <h5 class="card-title text-center fs-1">Inicio de sesión</h5>
    <p class="card-text">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    </p>
    <div class="botones mt-5 md-5">
  <button type="button" class="btn btn-light float-start">Atras</button>
  <button type="button" class="btn btn-primary float-end">Aceptar</button>
</div>
  </div>
 </div>
 </div>
  )
}

export default Control