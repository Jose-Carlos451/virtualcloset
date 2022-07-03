import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../paginas/home'
import Formulario from '../paginas/formulario'
import Control from '../paginas/Control'

function rutas() {
  return (
    <div>
     <Router>
        <Layout>
           <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/for" element={<Formulario/>}/>
            <Route exact path="/Cont" element={<Control/>}/>
           </Routes>
        </Layout>
        </Router>  
    </div>
  )
}

export default rutas