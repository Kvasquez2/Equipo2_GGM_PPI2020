import React from 'react'
import "./Info.css"
import { Link } from "react-router-dom";
function Info4(params) {
    return(
        <div><center>
     <Link to="/Surti3"  className="linea">
     <p class="in">Panaderia los delfines</p>
     </Link>
     <p class="in">Panaderia 3 esquinas</p>
     <p class="in">Panaderia la ramada</p>
     <p class="in">Panaderia la sierra</p>
     
     </center>
    </div>
    

    );
    
}
export default Info4;