import React from 'react'
import Atras from "../imagenes/Imagen51.png"
import "../style.css"
import queso from "../imagenes/Imagen29.png"
import { Link } from "react-router-dom";
function Queso(params) {
    return(
        <div>
        <Link to="/Info"><img className="tra" src= {Atras} /></Link>
         <center>
               <h1>Supermercado HM</h1>
         </center>
         <div className="ba"/>
         <center> <div className="que">
         <img c src= {queso}/><h3>Queso</h3>
         </div></center>
         <center><h2>valor: $2.300 </h2></center>
         <center><Link to="/Carro"><button className="bu">Añadir a carrito</button></Link></center>
       </div>
    );
    
}
export default Queso;