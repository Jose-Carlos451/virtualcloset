import React from "react";
import { Link } from "react-router-dom";
import Cobranza from "../img/cobranza.gif";

function intercobro() {
  return (
    <div class="fondo">
      <div class="d-grid gap-2 col-5 mx-auto mt-5">
        <button class="btn btn-info" type="button">
          Escanear código
        </button>
        <Link to="/escc" class="btn btn-success">
          Ingresar código
        </Link>
        <img src={Cobranza} class="rounded float-start"></img>
      </div>
      <div class="botones mt-5 md-5">
        <Link to="/" class="btn btn-light float-start">
          Atras
        </Link>
      </div>
    </div>
  );
}

export default intercobro;
