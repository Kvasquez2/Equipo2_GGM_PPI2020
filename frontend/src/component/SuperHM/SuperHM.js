import React from 'react'
import "./SuperHM.css"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
    <img className="atra" src= {Atras} />
    <center>
    <h1>Supermercado HM</h1>
    <div className="ba"/>
    <Link to="/Queso"><p class="hm">Queso</p></Link>
     <p class="hm">leche</p>
     <p class="hm">Gaseosa</p>
     </center>
     <div className="ba"/>
    </div>
    

    );
    
}
export default Info;