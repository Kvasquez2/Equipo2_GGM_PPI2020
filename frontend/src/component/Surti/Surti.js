import React from 'react'
import "./Surti.css"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
    <Link to="/Mercador3"><img className="atra" src= {Atras} /></Link>
    <center>
    <h1>Carniseria 3 Esquinas</h1>
    <div className="ba"/>
    <Link to="/Queso"><p class="hm">Tocino</p></Link>
     <p class="hm">Filete de ternera</p>
     <p class="hm">Lomo de ternera</p>
     </center>
     <div className="ba"/>
    </div>
    

    );
    
}
export default Info;