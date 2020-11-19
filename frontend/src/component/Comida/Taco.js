import React from 'react'
import Atras from "../../imagenes/Imagen51.png"
import "../../style.css"
import Pana from "../../imagenes/Imagen64.png"
import { Link } from "react-router-dom";
function Taco(params) {
    return(
        <div>
        <Link to="/Surti2"><img className="tra" src= {Atras} /></Link>
         <center>
               <h1>Carniceria 3 Esquinas</h1>
         </center>
         <div className="ba"/>
         <center> <div className="que">
         <img c src= {Pana}/><h3>Tacos al Pastor</h3>
         </div></center>
         <center><h2>valor: $6.500 </h2></center>
         <center><Link to="/Carro"><button className="bu">Añadir a carrito</button></Link></center>
       </div>
    );
    
}
export default Taco;