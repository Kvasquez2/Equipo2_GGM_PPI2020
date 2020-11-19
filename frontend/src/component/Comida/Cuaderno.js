import React from 'react'
import Atras from "../../imagenes/Imagen51.png"
import "../../style.css"
import Pana from "../../imagenes/Imagen70.png"
import { Link } from "react-router-dom";
function Cuaderno(params) {
    return(
        <div>
        <Link to="/Surti1"><img className="tra" src= {Atras} /></Link>
         <center>
               <h1>La Estrella</h1>
         </center>
         <div className="ba"/>
         <center> <div className="que">
         <div className="ba"/>
         <img c src= {Pana}/><h3>Cuaderno</h3>
         </div></center>
         <center><h2>valor: $2.500 </h2></center>
         <center><Link to="/Carro"><button className="bu">Añadir a carrito</button></Link></center>
       </div>
    );
    
}
export default Cuaderno;