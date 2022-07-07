import React, { Component } from "react";
import { Link } from "react-router-dom";
import Gift from "../img/hola-hello.gif";
import Axios from "../services/ConexionAxios";

function home() {
  return (
    <div>
      <div class="d-grid gap-2 col-5 mx-auto mt-5">
        <Link to="/int" class="btn btn-success mt-5">
          Cobrar Producto
        </Link>

        <Link to="/apli" class="btn btn-info mt-5">
          Registrar Producto
        </Link>

        <Link to="/cont" class="btn btn-warning mt-5">
          Administrador
        </Link>
      </div>

      <img src={Gift} class="rounded mx-auto d-block" />
    </div>
  );
}
export default home;
