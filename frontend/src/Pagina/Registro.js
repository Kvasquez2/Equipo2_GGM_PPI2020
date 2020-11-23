import React from "react";
import { Link } from "react-router-dom";
import "../style.css"


class Registrar extends React.Component {
  state = {
    Nombre: ".",
    Apellidos: ".",
    userName: ".",
    email: ".",
    password: ".",
    birthdate: ".",
    address: ".",
    phone: ".",
    gender: "."
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  fetchData = () => {
    console.log('Entre a la Funcion con ' + JSON.stringify(this.state));
    fetch('https://sbhu3.sse.codesandbox.io/api/User-Nuevo', {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(this.state),
    })
      .then(res => {res.json()
        .then(data => {
          console.log(data);
        });
      })
      .catch(err => { console.log(err) })
}
render(){
  return (

    <form class="div">

  <center>
  <div className="ba"/>
  <form class="div">
      <input
      name= "Nombre"
        class="b1"
        placeholder="Nombre"
        required=""
        defaultValue=""
        onChange={this.handleChange}
      />
<div className="ba"/>
<input
        name="Apellidos"
        class="b1"
        placeholder="Apellido"
        required=""
        defaultValue=""
        onChange={this.handleChange}
      />
    </form>
<div className="ba"/>
      <input
        name="email"
        type="email"
        id="inputEmail"
        class="b"
        placeholder="Correo"
        required=""
        autofocus=""
      />
<div className="ba"/>
      <input
        type="password"
        id="inputPassword"
        class="b"
        placeholder="Contraseña"
        required=""
      />
<div className="ba"/>
<input
        type="password"
        id="inputPassword"
        class="b"
        placeholder="Verificar Contraseña"
        required=""
      />
<div className="ba"/>
 <input
        class="b"
        placeholder="Edad"
        required=""
      />
<div className="ad"/>
<Link to="/Registrar"><button class="boton" type="submit">
        enviar

      </button></Link>
      
     </center>
    </form>
  );
}
}

export default Registrar;