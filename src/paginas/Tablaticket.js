import React from 'react'

function Tablaticket() {
  return (
    <div>
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">VirtualCloset</a>
  </div>
</nav>
  <div>
<h1>
<p class="text-center">Tabla de tickets</p>
</h1>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Número#</th>
      <th scope="col">
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Fecha</option>
      <option>01-07-2022</option>
      <option>02-07-2022</option>
      <option>03-07-2022</option>
    </select>
      </th>
      <th scope="col">
      <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Hora</option>
      <option>14:00:00</option>
      <option>15:00:00</option>
      <option>16:00:00</option>
    </select>
      </th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <a href="#" class="link-primary">1#</a>
      </th>
      <td>----</td>
      <td>----</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <a href="#" class="link-primary">2#</a>
      </th>
      <td>----</td>
      <td>----</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <a href="#" class="link-primary">3#</a>
      </th>
      <td>----</td>
      <td>----</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
  </tbody>
</table>

<div class="botones mt-5 md-5">
  <button type="button" class="btn btn-light float-start">Atras</button>
  <button type="button" class="btn btn-primary float-end">Siguiente</button>
</div>
    </div>
  )
}

export default Tablaticket