import React from "react";
import "../assets/css/trabajadores.css"


const Trabajador = (props) => {
  return (
    <div className="card-t">
      <div className="upper-container">
        <div className="image-container-tra">
          <img src={props.imgsrc} alt="" height="100px" width="100px" className="img-trabajador"/>
        </div>
      </div>
      <div className="lower-container">
        <h3 className> {props.nombre} </h3>
        <h4 className> {props.cargo} </h4>
        <p className> {props.descripcion} </p>
        </div>
    </div>
  );
};

export default Trabajador;
