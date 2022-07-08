//import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../services/ConexionAxios";

function formulario() {

  const variables={
  Seleccion:"",
  Nombre:"",
  Codigo:"",
  Precio:"",
  Cantidad:"",
};

const[valores,setValores]=useState(variables);

const cambioEstado=(e)=>{
  const {name,value}=e.target;
  setValores({...valores,[name]:value})
};

const Guardar=()=>{
  Axios.post('/persona/guardar',{
    Seleccion:valores.Seleccion,
    Nombre:valores.Nombre,
    Codigo:valores.Codigo,
    Precio:valores.Precio,
    Cantidad:valores.Cantidad,
  }).then(()=>{
    console.log('Registro guardado con exito');
  })
}

const Enviar=(e)=>{
  e.preventDefault();
  Guardar();
}


  return (
    <div>
<div>
<h1>
<p class="text-center">Información del Producto</p>
</h1>
</div>
<form onSubmit={Guardar}>
<div class="text-center">
<div class="input-group mb-3 mt-5 container mx-auto">
  <input type="file" class="form-control" id="inputGroupFile02" name='Seleccion' value={valores.Seleccion} onChange={cambioEstado}/>
  <label class="input-group-text" for="inputGroupFile02">Imagen</label>
</div>
</div>

<div class="input-group mb-3 mt-5 container mx-auto">
  <input type="text" class="form-control" placeholder="Nombre del Producto" aria-label="Username" aria-describedby="basic-addon1" name='Nombre' value={valores.Nombre} onChange={cambioEstado}/>
</div>

<div class="input-group mb-3 container mx-auto">
  <input type="text" class="form-control" placeholder="Código" aria-label="Recipient's username" aria-describedby="basic-addon2" name='Codigo' value={valores.Codigo} onChange={cambioEstado}/>
</div>

<div class="input-group mb-3 container mx-auto">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" placeholder="Precio" aria-label="Amount (to the nearest dollar)" name='Precio' value={valores.Precio} onChange={cambioEstado}/>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3 container mx-auto">
  <span class="input-group-text">Cant.</span>
  <input type="text" class="form-control" placeholder="Cantidad" aria-label="Amount (to the nearest dollar)" name='Cantidad' value={valores.Cantidad} onChange={cambioEstado}/>
</div>
<div class="botones mt-5 md-5">

  <Link to="/apli" class="btn btn-danger float-start">Cancelar</Link>
  <button type="submit" class="btn btn-primary float-end">Guardar</button>
</div>
</form>
    </div>
    

    
  )
}

export default formulario