import React from "react";
import App from "./AppNavegador/AppNavegador";

function Layout (props) {
  return (
    <div>
      {props.children}
      <App/>
    </div>
  );
}

export default Layout;