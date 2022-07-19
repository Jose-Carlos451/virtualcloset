import React, { Component, useState } from 'react'
import Axios from "../services/ConexionAxios";
import { Link } from "react-router-dom";

class tabladatos extends Component {
  constructor(props){
    super(props);

    this.state={
      productos:[]
    }


    this.getProductos - this.getProductos.bind(this);

  }
   
  componentDidMount(){
    this.getProductos();
  }



  getProductos=async()=>{
    await Axios.get('producto/consultar')
    .then(res=>{
      this.setState({productos: res.data});
    }).catch((error)=>{
      console.log(error);
    });
  }

  deleteProducto= async(id)=>{
    await Axios.delete('producto/eliminar/'+id)
    this.getProductos();
  }

  render(){
  return (
    <div class="fondo">
    <nav class="navbar barra2">
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
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.productos.map(producto=>
        <tr key={producto._id}>
          <th>{producto.nombre}</th>
          <th>{producto.cantidad}</th>
          <th>{producto.precio}</th>


          <th><Link className="btn btn-primary" 
          to={"/foredit/"+producto._id} 
          role="button">Editar</Link></th>


          <th><button type="button" 
          class="btn btn-danger"
          onClick={()=>this.deleteProducto(producto._id)}
          >Eliminar</button></th>
        </tr>
        
        )
    }
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
}
export default tabladatos