import React, { Component } from 'react'
import "./Super.css"
import merca from "../../imagenes/Imagen12.png"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";
function Super4 (params) {
    return (
    <div>
        <div>
        <Link to="/Principal"><img className="atras" src= {Atras} /></Link>
    <center><div>
    <img className="merca" src= {merca} />
    <p className="pa">Panaderias</p>
    </div></center>
    </div>
    </div>
    
    


    );
    
}
export default Super4;