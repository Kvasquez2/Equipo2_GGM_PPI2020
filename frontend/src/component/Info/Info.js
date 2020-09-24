import React from 'react'
import "./Info.css"
import { Link } from "react-router-dom";
function Info(params) {
    return(
        <div><center>
     <Link to="/Info">
     <p class="in">Supermercado HM</p>
     </Link>
     <p class="in">Supermercado Felipe</p>
     <p class="in">Supermercado la Ramada</p>
     <p class="in">Supermercado Xiaomi</p>
     
     </center>
    </div>
    

    );
    
}
export default Info;