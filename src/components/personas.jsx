import React, { Component } from "react";
import Trabajador from "./trabajadores";
import "../assets/css/trabajadores.css"

import GERENTE from "../assets/img/personas/GERENTE.jpg";
import cajera from "../assets/img/personas/cajera.jpg";
import chef1 from "../assets/img/personas/chef1.jpg";
import chef2 from "../assets/img/personas/chef2.jpg";
import Mesera1 from "../assets/img/personas/Mesera1.jpg";
import mesera2 from "../assets/img/personas/mesera2.jpg";

class Persona extends Component {
  render() {
    return (
      <div className="empleados">
        <h4 className="text-center textempleados">EMPLEADOS</h4>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6">
          <div className="col">
          <Trabajador
              imgsrc={GERENTE}
              cargo="GERENTE"
              nombre="Marcela Musolini"
              descripcion="Gerente del restaurante, decendiente de los fundadores."
            />
          </div>
          <div className="col">
          <Trabajador
              imgsrc={cajera}
              cargo="CAJERA"
              nombre="Luciana Pwerty"
              descripcion="Experta en Admistracion de la universidad de Hardvard"
            />
          </div>
          <div className="col">
          <Trabajador
              imgsrc={chef1}
              cargo="CHEF"
              nombre="Pietro Serranio"
              descripcion="Aprendiz del chef Alain Ducasse con 19 estrellas Michelin."
            />
          </div>
          <div className="col">
          <Trabajador
              imgsrc={chef2}
              cargo="CHEF"
              nombre="Jancarlo Protessio"
              descripcion="Graduado de la universidad de culinarias Lumbord Sofist."
            />
          </div>
          <div className="col">
          <Trabajador
              imgsrc={Mesera1}
              cargo="MESERA"
              nombre="Astrid Lampard"
              descripcion="Con 5 años de experiencia de atencion al cliente, el alma del restaurante."
            />
          </div>
          <div className="col">
          <Trabajador
              imgsrc={mesera2}
              cargo="MESERA"
              nombre="Danielle Pirlo"
              descripcion="Sobrina del legendario jugador de Futbol Andrea Pirlo."
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Persona;