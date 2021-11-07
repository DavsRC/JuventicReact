import React from "react";
import "../assets/css/menu.css";

const Menu = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="plato1" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.nombreplato}</h4>
        <h4 className="card-precio">$ {props.precio}</h4>
        <p className="card-text text-secondary">{props.descripcion}</p>
        <p className="text-muted">Tiempo: {props.tiempo}</p>
        <button type="button" className="btn btn-outline-success">
          Añadir al carrito
          </button>
      </div>
    </div>
  );
};

export default Menu;
