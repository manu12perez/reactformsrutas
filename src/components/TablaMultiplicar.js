import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();

  state = {
    multiplicacion: [],
  };

  mostrarTabla = (e) => {
    e.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    console.log(numero);

    const nuevaMultiplicacion = [];

    for (let i = 1; i <= 10; i++) {
      const retultado = numero * i;
      nuevaMultiplicacion.push(retultado);
    }

    this.setState({
      multiplicacion: nuevaMultiplicacion,
    });
  };

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={this.mostrarTabla}>
          <label>Introduzca número</label>
          <input type="text" ref={this.cajaNumero} />
          <button>Clacular</button>
        </form>
        <table border="1">
          <tr>
            <th>Cuenta</th>
            <th>Resultado</th>
          </tr>
          <tbody>
            {this.state.multiplicacion.map((resultado, index) => (
              <tr key={index}>
                <td>
                  {this.cajaNumero.current.value} * {index + 1}
                </td>
                <td>{resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
