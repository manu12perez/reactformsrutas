import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();

  state = {
    seleccionados: "",
  };

  mostrarMultiple = (e) => {
    e.preventDefault();
    //DENTRO DE UN SELECT MULTIPLE TENEMOS UN ARRAY CON TODAS LOS OPTIONS
    let options = this.selectMultiple.current.options;
    let datos = "";
    //CADA OBJETO OPTION DENTRO DEL ARRAY CONTIENE UN ATRIBTO PARA SABER
    //SI ESTA SELECCIONADO: selected
    //value, text
    for (var option of options) {
      if (option.selected == true) {
        datos += option.value + ", ";
      }
    }
    //MODIFICAMOS EL STATE DEL RENDER()
    this.setState({
        seleccionados: datos
    })
  };

  render() {
    return (
      <div>
        <h1>Selección Múltiple Formularios</h1>
        <h2 style={{ color: "blue" }}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarMultiple}>
          <select size="10" multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
            <option>Elemento 8</option>
            <option>Elemento 9</option>
            <option>Elemento 10</option>
          </select>
          <button>Mostrar seleccionados</button>
        </form>
      </div>
    );
  }
}
