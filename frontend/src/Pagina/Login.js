import React from "react";
import { Link } from "react-router-dom";
import "../style.css"
import Uscull from "../imagenes/Imagen1.png"

function Login() {
  return (
    <form class="form-signin">
      
        <center><img src={Uscull} 
          alt=""
          width="200"
          height="200"/></center>
  <center>
  <div className="ba"/>
      <input
        type="email"
        id="inputEmail"
        class="b"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
       
      </label>
      <input
        type="password"
        id="inputPassword"
        class="b"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" />recordar
        </label>
      </div><Link to="/Principal">
      <button class="boton" type="submit">
        Inciar Sesión
      </button></Link>
      <button class="boton" type="submit">
        Registrarse
      </button></center>
      <p class="mt-5 mb-3 text-muted"></p>
    </form>
  );
}

export default Login;