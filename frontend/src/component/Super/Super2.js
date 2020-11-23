import React, { Component } from 'react'
import "./Super.css"
import merca from "../../imagenes/Imagen14.png"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";
function Super2 (params) {
    return (
        <div className="fondo">
        <div>
        <Link to="/Principal"><img className="atras" src= {Atras} /></Link>
    <center><div>
    <img className="merca" src= {merca} />
    <p className="pa">Variedades</p>
    </div></center>
    </div>
    </div>
    
    


    );
    
}
export default Super2;