import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicar2 from "./TablaMultiplicar2";
import SeleccionMultiple from "./SeleccionMultiple";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cine" element={<Cine />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/formSimple" element={<FormSimple />} />
          <Route path="/collatz" element={<Collatz />} />
          <Route path="/tablaMultiplicar" element={<TablaMultiplicar />} />
          <Route path="/tablaMultiplicar2" element={<TablaMultiplicar2 />} />
          <Route path="/seleccionMultiple" element={<SeleccionMultiple />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
