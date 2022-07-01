import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../paginas/home'


function rutas() {
  return (
    <div>
     <Router>
        <Layout>
           <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/encabezado" element={<encabezado/>}/>
           </Routes>
        </Layout>
        </Router>  
    </div>
  )
}

export default rutas