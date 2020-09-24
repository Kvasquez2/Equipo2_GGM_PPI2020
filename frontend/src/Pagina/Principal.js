import React, { Component } from 'react'
import Header from "../component/Hearder/Header"
import Banking from "../component/Banking/Banking"
import Market from "../component/Market/Market"
function Principal(params) {
    return(
       <div>
       <Header/>
       <Banking/>
       <Market/>
       </div>
    

    );
    
}
export default Principal;