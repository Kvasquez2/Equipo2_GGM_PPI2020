import React, { Component } from 'react'
import "./Super.css"
import merca from "../../imagenes/Imagen9.png"
import Atras from "../../imagenes/Imagen51.png"
function SuperHM (params) {
    return (
    <div>
        <div>
    <img className="atras" src= {Atras} />
    <center><div>
    <img className="merca" src= {merca} />
    <p className="pa">Supermercado</p>
    </div></center>
    </div>
    </div>
    
    


    );
    
}
export default SuperHM;