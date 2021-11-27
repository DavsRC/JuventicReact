import React, { Component } from "react";
import Formatoser from "./formatoservicios";
import "../assets/css/servicios.css";

import cumple from "../assets/img/servicios/cumple.jpg";
import aniversario from "../assets/img/servicios/aniversario.jpg";
import infantiles from "../assets/img/servicios/infantiles.jpg";
import despedida from "../assets/img/servicios/despedida.jpg";
import matrimonio from "../assets/img/servicios/matrimonio.jpg";
import cena from "../assets/img/servicios/cena.jpg";

class Servicio extends Component {
  render() {
    return (
      <div className="container-fluid containerdeservicios d-flex jusify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Formatoser
              imgsrc={cumple}
              precio="25000"
              nombreplato="Pizza de ciruela"
              descripcion="Ofrecemos los mejores cumpleaños."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={aniversario}
              precio="30000"
              nombreplato="Mortadela con Milanesa"
              descripcion="Disfrute sus aniversarios con nosotros."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={infantiles}
              precio="25000"
              nombreplato="Stracciatella"
              descripcion="Venga y celebre con sus hijos."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={despedida}
              precio="25000"
              nombreplato="Pizza Vegetariana"
              descripcion="Despidase de la mejor manera."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={matrimonio}
              precio="46000"
              nombreplato="Langosta Italiana"
              descripcion="Declaré su amor con nosotros."
              tiempo="40 Min"
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={cena}
              precio="25000"
              nombreplato="Lasaña Italiana"
              descripcion="Venga a comer con amigos."
              tiempo="30 Min"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Servicio;
