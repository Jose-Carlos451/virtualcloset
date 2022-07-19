import React, { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import Axios from "../services/ConexionAxios";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

function Formulario() {
     const variablesInicio = {
      _id:"",
      nombre:"",
      codigo:"",
      cantidad:"",
      precio:""
     };

     const [values, setValues] = useState(variablesInicio);
     const params = useParams();
     const navigate = useNavigate();

     const CambioEstado = (e) => {
      const { name, value} = e.target;
      setValues({ ...values, [name]: value});
     };


     //Crear metodo para guardar informacion
     const Guardar=async()=>{
      Axios.post('/producto/guardar',{
        nombre:values.nombre,
        codigo:values.codigo,
        cantidad:values.cantidad,
        precio:values.precio

      }).then(()=>{
        toast("Producto registrado con exito",{
        position:"top-center",
        type:"success",
        autoClose:2000
      });
     })
     setValues("");
     navigate('/');
    }

    const oneProducto=async(id)=>{
      const buscarOne=await Axios.get('/producto/consultarOne/'+id);
      setValues(buscarOne.data);
    }
    const updateProducto=async()=>{
      await Axios.put(`/producto/actualizar/${params.id}`,{
        nombre: values.nombre,
        codigo: values.codigo,
        cantidad: values.cantidad,
        precio: values.precio
      }).then(()=>{
        toast("Los datos se han actualizado correctamente",{
          position:"top-right",
          type:"info",
          autoClose:5000
        })
      })
      navigate('/');
    }


    const Enviar = (e) =>{
      e.preventDefault();

      if(values._id===""){
        Guardar();
      }else{
        updateProducto();
      }

    };


    useEffect(()=>{
      oneProducto(params.id);
    }, [params.id])
     

    return (
      <div class="fondo">
        <div>
          <h1>
            <p class="text-center">Información del Producto</p>
          </h1>
        </div>
        <div class="card-body">
          <form onSubmit={Enviar}>
            <div class="input-group mb-3 mt-5 container mx-auto">
              <input type="text"
                class="form-control"
                name="nombre"
                value={values.nombre}
                onChange={CambioEstado}
                placeholder="Nombre del Producto"
              />
            </div>

            <div className="input-group mb-3 container mx-auto">
              <input type="text"
                className="form-control"
                name="codigo"
                value={values.codigo}
                onChange={CambioEstado}
                placeholder="Código"
              />
            </div>

            <div className="input-group mb-3 container mx-auto">
              <span className="input-group-text">$</span>
              <input type="text"
                className="form-control"
                name="precio"
                value={values.precio}
                onChange={CambioEstado}
                placeholder="Precio"
              />
              <span className="input-group-text">.00</span>
            </div>

            <div className="input-group mb-3 container mx-auto">
              <span className="input-group-text">Cant.</span>
              <input type="text"
                className="form-control"
                name="cantidad"
                value={values.cantidad}
                onChange={CambioEstado}
                placeholder="Cantidad"
              />
            </div>
            <div className="botones mt-5 md-5">
              <Link to="/" className="btn btn-danger float-start">
                Cancelar
              </Link>
              <button
                type="submit"
                className="btn btn-primary float-end"
              >
                {values._id===""? "Enviar":"Actualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Formulario;
