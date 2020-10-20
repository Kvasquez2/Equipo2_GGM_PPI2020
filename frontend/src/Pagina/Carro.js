import React from 'react'
import "../style.css"
import Atras from "../imagenes/Imagen51.png"
import Car from "../imagenes/Imagen24.png"
import { Link } from "react-router-dom";

function Carro(params) {
    return(
        <div>
            <img className="tra" src= {Atras} />
    <center>
    <img src= {Car} />
    <h1>Historial de compra</h1>
    <div className="ba"/>
     </center>
     <center>
         <div className="be">
             <li className="te">Tocino</li>
             <li className="te">Pizza de queso</li>
             <li className="te">Ancheta</li>
             <li className="te">Verduras</li>
             <li className="te">Pan frances</li>
             <li className="te">Queso</li>
         </div>
    </center>
     <div className="ba"/>
     <center>
     <div><button className="bo">Agregar a carrito</button></div>
     <div className="bi"/>
     <Link to="/Tiempo"><div><button className="bb">Hacer pedido</button></div></Link>
     </center>
     <div className="bi"/>
    </div>
    

    );
    
}
export default Carro;