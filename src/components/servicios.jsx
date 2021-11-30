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
              nombreplato="Fiestas de Cumpleaños"
              descripcion="Ofrecemos los mejores cumpleaños."
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={aniversario}
              nombreplato="Eventos de Aniversario"
              descripcion="Disfrute sus aniversarios con nosotros."
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={infantiles}
              nombreplato="Fiestas Infantiles"
              descripcion="Venga y celebre con sus hijos."
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={despedida}
              nombreplato="Despedidas de Solter@"
              descripcion="Despidase de la mejor manera."
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={matrimonio}
              nombreplato="Celebracion de Bodas"
              descripcion="Declaré su amor con nosotros."
            />
          </div>
          <div className="col-md-4">
          <Formatoser
              imgsrc={cena}
              nombreplato="Eventos Formales"
              descripcion="Venga a comer con amigos."
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Servicio;
