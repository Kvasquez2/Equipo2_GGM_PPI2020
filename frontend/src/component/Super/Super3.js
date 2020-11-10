import React, { Component } from 'react'
import "./Super.css"
import merca from "../../imagenes/Imagen11.png"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";
function Super3 (params) {
    return (
    <div>
        <div>
        <Link to="/Principal"><img className="atras" src= {Atras} /></Link>
    <center><div>
    <img className="merca" src= {merca} />
    <p className="pa">Carniceria</p>
    </div></center>
    </div>
    </div>
    
    


    );
    
}
export default Super3;