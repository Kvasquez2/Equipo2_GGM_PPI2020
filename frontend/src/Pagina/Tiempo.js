import React from 'react'
import "../style.css"
import { Link } from "react-router-dom";

function Info(params) {
    return(
        <div>
            <center>
    <h1>Tiempo Estimado</h1>
    <h2>1 HORA</h2>
    <h1>Total de Compra</h1>
    <h2>43.000  Pesos</h2>
    <p>el pago se hara en contra entrega</p>
    <Link to="/Gra"><div><button className="bo">Continuar</button></div></Link>
    <div className="bi"/>
     <div><button className="bb">Cancelar</button></div>
     <div className="bi"/>
     </center>
    </div>
    
    
    

    );
    
}
export default Info;