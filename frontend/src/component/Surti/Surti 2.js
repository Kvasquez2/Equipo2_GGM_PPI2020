import React from 'react'
import "./Surti.css"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
    <Link to="/Mercador5"><img className="atra" src= {Atras} /></Link>
    <center>
    <h1>Tacos</h1>
    <div className="ba"/>
    <Link to="/Taco"  className="linea"><p class="hm">Tacos al pastor</p></Link>
     <p class="hm">Tacos naturales</p>
     <p class="hm">Tacos solo carne</p>
     </center>
     <div className="ba"/>
    </div>
    

    );
    
}
export default Info;