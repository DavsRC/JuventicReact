import React from "react";
import "../assets/css/slider.css";
import hd1 from "../assets/img/slider/hd1.jpg";
import hd2 from "../assets/img/slider/hd2.jpg";
import hd3 from "../assets/img/slider/hd3.jpg";



function Carrusel() {
  return (
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={hd1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fs-1 text">Los Mejores ingredientes</h5>
        <p className="fs-4 text">Traidos desde Narnia a tu mesa, sin duda alguna la mejor opcion alimenticia</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={hd2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fs-1 text">Muchas Pizzas</h5>
        <p className="fs-4 text">Tenemos la mayor variedad de pizzas de la ciudad, no tenemos competencia y es obvio el porque</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={hd3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fs-1 text">Variedad de Platos</h5>
        <p className="fs-4 text">Nuestra especialidad son las pizzas, pero si esta sno son una opcion para ti no tienes de que preocuparte</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
  );
}

export default Carrusel;
