import React from "react";
import { Link } from "react-router-dom";

function Control() {
  return (
    <div>
      <h5 class="card-title text-center fs-1">Inicio de sesión</h5>
      <p class="card-text">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </p>
      <div class="botones mt-5 md-5">
        <Link to="/" class="btn btn-light float-start">
          Atras
        </Link>
        <Link to="/regis" class="btn btn-primary float-end">
          Aceptar
        </Link>
      </div>
    </div>
  );
}

export default Control;
