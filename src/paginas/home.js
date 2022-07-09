import React, { Component } from "react";
import { Link } from "react-router-dom";
import Gift from "../img/hello.gif";
import Axios from "../services/ConexionAxios";
import './home.css';

//#f8e8cd

function home() {
  return (
    <div class="fondo">
      
      <div class="d-grid gap-2 col-2 mx-auto mt-1 ">
      <Link to="/int" class="btn btn- mt-5 color-boton">
          Cobrar Producto
        </Link>
       
        <Link to="/apli" class="btn btn- mt-5 color-botonregistro">
          Registrar Producto
        </Link>

        <Link to="/cont" class="btn btn- mt-5 color-botonadministrador">
          Administrador
        </Link>
      </div>
      <div class="rounded float-start">
      <img src={Gift} class="rounded mx-auto d-block mt-1 " />
      </div>
    </div>
  );
}
export default home;
