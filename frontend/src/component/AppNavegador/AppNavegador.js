import React, { Component } from 'react'
import "./AppNavegador.css"
import casa from "../../imagenes/Imagen22.png"
import planeta from "../../imagenes/Imagen23.png"
import carro from "../../imagenes/Imagen24.png"
import tuerca from "../../imagenes/Imagen25.png"
import { Link } from "react-router-dom";
function AppNavegador(params) {
    return(
        <div >
           
         <div className="entre">
             <Link to="/Principal"><img className="dien" src= {casa} /> </Link>
             <Link to="/Buscar"><img className="dien" src= {planeta} /> </Link>
             <Link to="/Carro"><img className="dien" src= {carro} /> </Link>
 <img className="dien" src= {tuerca} />
 </div>
</div> 
    

    );
    
}
export default AppNavegador;