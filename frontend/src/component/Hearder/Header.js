import React from 'react'
import "./Header.css"
import Captura from "../../imagenes/Captura.png"

function Header(params) {
    return(
        <div className="container">
     <img className="avatar" src= {Captura} />
    <h1 className="yuli">cr9b #49-38</h1>
    
    
    </div>
    

    );
    
}
export default Header;