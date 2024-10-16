// import React, { Component } from "react";

// export default class TablaMultiplicar extends Component {
//   cajaNumero = React.createRef();

//   state = {
//     multiplicacion: [],
//   };

//   mostrarTabla = (e) => {
//     e.preventDefault();
//     let numero = parseInt(this.cajaNumero.current.value);
//     console.log(numero);

//     const nuevaMultiplicacion = [];

//     for (let i = 1; i <= 10; i++) {
//       const retultado = numero * i;
//       nuevaMultiplicacion.push(retultado);
//     }

//     this.setState({
//       multiplicacion: nuevaMultiplicacion,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Tabla de Multiplicar</h1>
//         <form onSubmit={this.mostrarTabla}>
//           <label>Introduzca número</label>
//           <input type="text" ref={this.cajaNumero} />
//           <button>Clacular</button>
//         </form>
//         <table border="1">
//           <tr>
//             <th>Cuenta</th>
//             <th>Resultado</th>
//           </tr>
//           <tbody>
//             {this.state.multiplicacion.map((resultado, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     {this.cajaNumero.current.value} * {index + 1}
//                   </td>
//                   <td>{resultado}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// FORMA PROFESOR CON OBJETOS
import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();

  state = {
    tabla: [],
  };

  mostrarTabla = (e) => {
    e.preventDefault();

    let numero = parseInt(this.cajaNumero.current.value);

    console.log(numero);

    var aux = [];

    for (var i = 1; i <= 10; i++) {
      let dato = {
        operacion: numero + " * " + i,

        resultado: numero * i,
      };

      aux.push(dato);
    }

    this.setState({
      tabla: aux,
    });
  };

  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>

        <form>
          <label>Introduzca número</label>

          <input type="text" ref={this.cajaNumero} />

          <button onClick={this.mostrarTabla}>Tabla multiplicar</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Operación</th>

              <th>Resultado</th>
            </tr>
          </thead>

          <tbody>
            {this.state.tabla.map((fila, index) => {
              return (
                <tr key={index}>
                  <td>{fila.operacion}</td>

                  <td>{fila.resultado}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
