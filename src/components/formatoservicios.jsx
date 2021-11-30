import React from "react";
import "../assets/css/servicios.css";
import { Link } from "react-router-dom";

const Formatoser = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="plato1" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.nombreplato}</h4>
        <p className="card-text text-secondary">{props.descripcion}</p>
        <Link to="/Reserva" className="btn btn-outline-success">
          Haga su Reserva
          </Link>
      </div>
    </div>
  );
};

export default Formatoser;