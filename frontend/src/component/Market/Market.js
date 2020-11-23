import React, { Component } from 'react'
import "./Market.css"
import mercado from "../../imagenes/Imagen9.png"
import carniceria from "../../imagenes/Imagen11.png"
import panaderia from "../../imagenes/Imagen12.png"
import comidas from "../../imagenes/Imagen13.png"
import variedad from "../../imagenes/Imagen14.png"
import { Link } from "react-router-dom";
import Fondo from "../../imagenes/100.jpg"
function Market (params) {
    return (
    <div className="fondo">
        <div className="ba"/>
        <center><div className="con">
        <center><h1><Link to="/Mercador"className="linea">Supermercado</Link></h1></center>
    <img className="marcontainer" src= {mercado} />
    
    </div></center>
    <div className="ba"/>
    <div className="divicion">
    <center><Link to="/Mercador2"className="linea"><div className="con1">
    <h1>variedades</h1>
    <img className="marcontainer" src= {variedad} />
    </div></Link></center>
    <div className="ba"/>
    <center><div className="con2">
    <Link to="/Mercador3" className="linea"><h1>carnicerias</h1></Link> 
   <img className="marcontainer" src= {carniceria} />
    </div></center>
    </div>
    <div className="ba"/>
    <div className="divicion">
    <center><Link to="/Mercador4" className="linea"><div className="con3">
    <h1>panaderias</h1>
    <img className="marcontainer" src= {panaderia} />
    </div></Link> </center>
    <div className="ba"/>
    <center><Link to="/Mercador5" className="linea"><div className="con4">
    <h1>comidas rapidas</h1>
    <img className="marcontainer" src= {comidas} />
    </div></Link></center>
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