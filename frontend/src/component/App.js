import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Principal from "../Pagina/Principal";
import Mercador from "../Pagina/Mercador";
import Layout from "./layout";
import HM from "./SuperHM/SuperHM";
function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/Mercador" component={Mercador} />
        <Route exact path="/Info" component={HM} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;