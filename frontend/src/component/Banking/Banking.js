import React, { Component } from 'react'
import "./Banking.css"
import codigo from "../../imagenes/codigo-qr.png"

function Banking (params) {
    return(
    <div className="bancontainer">
     <h2 className="pay">Alfonso</h2>
     <img className="qr" src= {codigo}/> 
    <h2 className="detailstext">USCULL</h2>
    </div>
    );
    
}
export default Banking;