import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/musica">Música</a>
          </li>
          <li>
            <a href="/formSimple">Formulario</a>
          </li>
          <li>
            <a href="/collatz">Collatz</a>
          </li>
          <li>
            <a href="/tablaMultiplicar">Tabla de Multiplicar</a>
          </li>
          <li>
            <a href="/tablaMultiplicar2">Tabla de Multiplicar 2</a>
          </li>
          <li>
            <a href="/seleccionMultiple">Selección Múltiple</a>
          </li>
        </ul>
      </div>
    );
  }
}
