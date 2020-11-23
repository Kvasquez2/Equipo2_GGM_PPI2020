import React, { Component } from 'react'
import "../style.css"
import Bus from "../imagenes/buscar.png"

function Buscar (params) {
    return(
        <center>

            <div className="ba"/>
            <div className="ba"/>
            <div className="ba"/>
            <form class="div2">
<input
        type="email"
        id="inputEmail"
        class="b2"
        placeholder="Buscar"
        required=""
      />
<img className="atra" src= {Bus} />
</form>
      <div className="ba"/>
      <div className="ba"/>
      <div className="ba"/>

      </center>
    );
    
}
export default Buscar;