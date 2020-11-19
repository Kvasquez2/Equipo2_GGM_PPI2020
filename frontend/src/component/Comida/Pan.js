import React from 'react'
import Atras from "../../imagenes/Imagen51.png"
import "../../style.css"
import Pana from "../../imagenes/Imagen52.png"
import { Link } from "react-router-dom";
function Pan(params) {
    return(
        <div>
        <Link to="/Surti3"><img className="tra" src= {Atras} /></Link>
         <center>
               <h1>dPanaderia los Delfines</h1>
         </center>
         <div className="ba"/>
         <center> <div className="que">
         <img c src= {Pana}/><h3>Pan frances</h3>
         </div></center>
         <center><h2>valor: $2.500 </h2></center>
         <center><Link to="/Carro"><button className="bu">Añadir a carrito</button></Link></center>
       </div>
    );
    
}
export default Pan;