import React from 'react'
import "./Info.css"
import Navegador from "../AppNavegador/AppNavegador"


function Info(params) {
    return(
        <div><center>
     <p class="in">Supermercado HM</p>
     <p class="in">Supermercado Felipe</p>
     <p class="in">Supermercado la Ramada</p>
     <p class="in">Supermercado Xiaomi</p>
     <Navegador/>
     </center>
    </div>
    

    );
    
}
export default Info;