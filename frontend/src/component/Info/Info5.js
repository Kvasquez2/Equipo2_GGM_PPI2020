import React from 'react'
import "./Info.css"
import { Link } from "react-router-dom";
function Info5(params) {
    return(
        <div><center>
     <Link to="/Info">
     <p class="in">Tacos</p>
     </Link>
     <p class="in">Pizza</p>

     
     </center>
    </div>
    

    );
    
}
export default Info5;