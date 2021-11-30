import React from "react";
import "../assets/css/menuapi.css";
import { Link } from "react-router-dom";

function Menuapi() {
    return (
    <div className="container menupag">
    <div className="row row-cols-5 py-5 my-5 border-top">
      <div className="col">
        <a to="/" className="d-flex-menupag align-items-center mb-3 Link-dark text-decoration-none">
        </a>
        <p className="text-muted primeracol" >&copy;Menu administrativo. Recomendación: Al añadir un item a estos apartados este estará disponible a cualquier usuarios en la pagina web, es de vital importancia que se tenga un buen uso y gestión de las herramientas disponibles en el modo Administrador.</p>
      </div>
  
      <div className="col">
  
      </div>
      <div className="col">
        <h5>Productos</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/AdmServicios" className="nav-Link p-0 text-muted">Administrar Servicios</Link></li>
        </ul>
      </div>
  
      <div className="col">
        <h5>Relaciones</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/AdmMenu" className="nav-Link p-0 text-muted">Administrar Menu</Link></li>
        </ul>
      </div>

    </div>
  </div>
    );
}

export default Menuapi;