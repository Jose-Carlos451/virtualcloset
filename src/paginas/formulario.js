import React from 'react'

function formulario() {
  return (
    <div>
        <form className='datos'>
        <label for="nombre">
            Nombre del Producto
        </label>
        <input type="text" placeholder='Ingrese el nombre del producto'/>
        <label for="codigo">
            Codigo del producto
        </label>
        <input type="text" placeholder='Codigo del producto'/>
        <label for="Cantidad">
            Cantidad del producto
        </label>
        <input type="text" placeholder='Cantidad del producto'/>
        <label for="precio">
            Precio del producto
        </label>
        <input type="text" placeholder='Precio del produccion'/>
        </form>
    </div>
  )
}

export default formulario