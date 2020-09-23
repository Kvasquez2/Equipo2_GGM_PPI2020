import React, { Component } from 'react'
import "./Market.css"
import mercado from "../../imagenes/Imagen9.png"
import carniceria from "../../imagenes/Imagen11.png"
import panaderia from "../../imagenes/Imagen12.png"
import comidas from "../../imagenes/Imagen13.png"
import variedad from "../../imagenes/Imagen14.png"

function Market (params) {
    return (
    <div>
    <div className="divicion">
    <div>
    <img className="marcontainer" src= {mercado} />
    <p>superomercado</p>
    </div>
    <div>
    <img className="marcontainer" src= {carniceria} />
    <p>canicerias</p>
    </div>
    </div>
    <div className="divicion">
    <div>
    <img className="marcontainer" src= {panaderia} />
    <p>panaderias</p>
    </div>
    <div>
    <img className="marcontainer" src= {comidas} />
    <p>comidas rapidas</p>
    </div>
    </div>
    <center><div className="cente">
    <img className="marcontainer" src= {variedad} />
    <p>variedades</p>
    </div></center>
    </div>
    


    );
    
}
export default Market;