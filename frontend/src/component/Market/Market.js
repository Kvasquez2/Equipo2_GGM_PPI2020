import React, { Component } from 'react'
import "./Market.css"
import mercado from "../../imagenes/Imagen9.png"
import carniceria from "../../imagenes/Imagen11.png"
import panaderia from "../../imagenes/Imagen12.png"
import comidas from "../../imagenes/Imagen13.png"
import variedad from "../../imagenes/Imagen14.png"
import { Link } from "react-router-dom";
function Market (params) {
    return (
    <div>
        <center><div className="con"><Link to="/Mercador">
        <h1>SUPERMERCADO</h1>
    <img className="marcontainer" src= {mercado} />
    </Link>
    </div></center>
    <div className="divicion">
    <div className="con1">
    <h1>variedades</h1>
    <img className="marcontainer" src= {variedad} />
    </div>
    <div className="con2">
    <h1>canicerias</h1>
    <img className="marcontainer" src= {carniceria} />
    </div>
    </div>
    <div className="divicion">
    <div className="con3">
    <h1>panaderias</h1>
    <img className="marcontainer" src= {panaderia} />
    </div>
    <div className="con4">
    <h1>comidas rapidas</h1>
    <img className="marcontainer" src= {comidas} />
    </div>
    </div>
    
    <div className="letras">
                <h2>Descubre Uscull</h2>
                <p>Quienes Somos</p>
                <p>Que Queremos</p>
            </div>
    </div>
    


    );
    
}
export default Market;