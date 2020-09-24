import React from 'react'
import "./SuperHM.css"
import Atras from "../../imagenes/Imagen51.png"
function Info(params) {
    return(
        <div>
    <img className="atra" src= {Atras} />
    <center>
    <h1>Supermercado HM</h1>
     <p class="hm">Queso</p>
     <p class="hm">leche</p>
     <p class="hm">Gaseosa</p>
     </center>
    </div>
    

    );
    
}
export default Info;