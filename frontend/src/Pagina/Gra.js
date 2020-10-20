import React from 'react'
import "../style.css"
import bien from "../imagenes/bien.PNG"
import { Link } from "react-router-dom";

function Gra(params) {
    return(
        <div>
            <center>
    <h1>Compra Realizada Exitosamente</h1>
    <div className="ba"/>
    <img className="bien" src= {bien} />
    <div className="ba"/>
    <h3>Gracias Por confiar en nosotros</h3>
    <p>😁😁</p>
    
     </center>
    </div>
    
    
    

    );
    
}
export default Gra;