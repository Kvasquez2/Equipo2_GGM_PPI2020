import React, { Component } from 'react'
import Header from "../Hearder/Header"
import Banking from "../Banking/Banking"
import Market from "../Market/Market"
import AppNavegador from "../AppNavegador/AppNavegador"
function Principal(params) {
    return(
       <div>
       <Header/>
       <Banking/>
       <Market/>
       <AppNavegador/>
       </div>
    

    );
    
}
export default Principal;