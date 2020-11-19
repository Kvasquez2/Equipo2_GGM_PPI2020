import React from 'react'
import "./Surti.css"
import Atras from "../../imagenes/Imagen51.png"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
    <Link to="/Mercador4"><img className="atra" src= {Atras} /></Link>
    <center>
    <h1>Panaderia los Delfines</h1>
    <div className="ba"/>
    <Link to="/Pan"  className="linea"><p class="hm">Pan Frances</p></Link>
     <p class="hm">Croissant</p>
     <p class="hm">Galleta de Jengibre</p>
     </center>
     <div className="ba"/>
    </div>
    

    );
    
}
export default Info;