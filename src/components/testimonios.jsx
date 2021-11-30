import React, { Component } from "react";
import "../assets/css/testimonios.css";
import { Link } from "react-router-dom";

import cliente1 from "../assets/img/personas/cliente1.jpg";
import Cliente2 from "../assets/img/personas/Cliente2.jpg";
import Cliente3 from "../assets/img/personas/Cliente3.jpg";
import estre from "../assets/img/personas/estre.jpeg";
import Comentario from "./comentarios";

class Testimonio extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h4 className="text-center">OPINIONES</h4>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
          <div className="col">
            <Comentario
              imgsrc={cliente1}
              nombreopi="Oscar Skitchen"
              opinion="Sin duda alguna mi restaurante favorito, estoy planeando llevar a toda mi familia, la atención es excelente y los precios espectaculares."
              calificacion={estre}
            />
          </div>
          <div className="col">
            <Comentario
              imgsrc={Cliente2}
              nombreopi="Naren Voos"
              opinion="Aunque el servicio es un poco lento la atención es muy buena, les recomiendo la Pizza Vegana, quiero volver muchas veces"
              calificacion={estre}
            />
          </div>
          <div className="col">
            <Comentario
              imgsrc={Cliente3}
              nombreopi="Samira Gesternk"
              opinion="Un lugar espectacular para eventos pequeños y medianos, casi no logro encontrar una reserva por la gran cantidad de clientes, pero valió la pena la espera."
              calificacion={estre}
            />
          </div>
        </div>
        <div className="row">
          <div>
          <div className="col">
          <button type="button" class="btn btn-outline-danger buttonopinion"><Link to="/ReseNa" className="nav-Link p-0 text-muted">Añadir Reseña</Link></button>
          </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Testimonio;
