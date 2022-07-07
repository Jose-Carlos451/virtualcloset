import React, { useState } from 'react'
import Axios from "../services/ConexionAxios";
import { Link } from "react-router-dom";

function tabladatos() {
  const[producto,setProductos]=useState([]);

  const Consultar=async()=>{
    const consulta=await Axios.get('/persona/consultar');
    setProductos.Personas(consulta.data);
  }
  
  return (
    <div>
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
  <div>
<h1>
<p class="text-center">Productos Registrados</p>
</h1>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Resistol 850</th>
      <td>20</td>
      <td>$15.00</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Tijera Barrilito</th>
      <td>24</td>
      <td>$18.00</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Borrador Pelikan ch</th>
      <td>35</td>
      <td>$3.50</td>
      <td>
      <button type="button" class="btn btn-outline-danger">Eliminar</button>
      </td>
    </tr>
  </tbody>
</table>

<div class="botones mt-5 md-5">
<Link to="/" class="btn btn-light float-start">
Atras
</Link>
  
  <button type="button" class="btn btn-primary float-end">Siguiente</button>
</div>
    </div>
  )
}

export default tabladatos