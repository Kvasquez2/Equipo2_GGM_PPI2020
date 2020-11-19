import React from 'react'
import "./Surti.css"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
    <Link to="/Mercador2"><img className="atra" src= {Atras} /></Link>
    <center>
    <h1>LA Estrella</h1>
    <div className="ba"/>
    <Link to="/Cuaderno" className="linea"><p class="hm">Cuaderno</p></Link>
     <p class="hm">Lapiz</p>
     <p class="hm">Borrador</p>
     </center>
     <div className="ba"/>
    </div>
    

    );
    
}
export default Info;