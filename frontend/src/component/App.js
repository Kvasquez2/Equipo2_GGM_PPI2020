import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pagina/Login"
import Principal from "../Pagina/Principal";
import Mercador from "../Pagina/Mercador";
import Mercador2 from "../Pagina/Mercador2";
import Mercador3 from "../Pagina/Mercador3";
import Mercador4 from "../Pagina/Mercador4";
import Mercador5 from "../Pagina/Mercador5";
import Layout from "./layout";
import HM from "./SuperHM/SuperHM";
import Queso from "../Pagina/Queso"
import Carro from "../Pagina/Carro"
import Tiempo from "../Pagina/Tiempo"
import Gra from "../Pagina/Gra"
function App() {
  return (
    <BrowserRouter>
    
    
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
        <Route exact path="/Principal" component={Principal} />
        <Route exact path="/Mercador" component={Mercador} />
        <Route exact path="/Mercador2" component={Mercador2} />
        <Route exact path="/Mercador3" component={Mercador3} />
        <Route exact path="/Mercador4" component={Mercador4} />
        <Route exact path="/Mercador5" component={Mercador5} />
        <Route exact path="/Info" component={HM} />
        <Route exact path="/Queso" component={Queso} />
        <Route exact path="/Carro" component={Carro} />
        <Route exact path="/Tiempo" component={Tiempo} />
        <Route exact path="/Gra" component={Gra } />
        </Layout>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;