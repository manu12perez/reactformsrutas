import React, { Component } from "react";

export default class Collatz extends Component {
  //NECESITAMOS UN OBJETO CAJAJA PARA RECUPERAR EL DATO
  cajaNumero = React.createRef();

  state = {
    secuencia: [],
  }

  mostrarCollatz = (e) => {
    e.preventDefault();
    console.log("Petición lista");
    let numero = parseInt(this.cajaNumero.current.value);
    console.log(numero);

    if (isNaN(numero) || numero <= 0) {
      alert("Por favor, introduce un número entero positivo.");
      return;
    }

    // Limpiar la secuencia antes de calcular
    const nuevaSecuencia = [];

    while(true){
        nuevaSecuencia.push(numero);
        if (numero === 1) break;

        if (numero % 2 === 0){
            numero = numero / 2 //PAR
        } else {
            numero = (numero * 3) + 1 //IMPAR
        }
    }

    this.setState({
        secuencia: nuevaSecuencia
    })
  }

  render() {
    return (
      <div>
        <h1>Método Collatz</h1>
        <form onSubmit={this.mostrarCollatz}>
          <label>Introduzca un número</label>
          <input type="text" ref={this.cajaNumero} placeholder="Introduce un número" />
          <button>Calcular</button>
        </form>
        <ul>
          {
          this.state.secuencia.map((numero, index) => (
            <li key={index}>
                {numero}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
