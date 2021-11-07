import React from "react";
import "../assets/css/testimonios.css"


const Comentario = (props) => {
  return (
    <div className="card-c">
      <div className="upper-container-c">
        <div className="image-container">
          <img src={props.imgsrc} alt="" height="100px" width="100px" className="img-cliente"/>
        </div>
      </div>
      <div className="lower-container-c">
        <h3 className> {props.nombreopi} </h3>
        <img src={props.calificacion} alt="" height="100px" width="100px" className="calificacion"/>
        <p className> {props.opinion} </p>
        
        </div>
    </div>
  );
};

export default Comentario;
