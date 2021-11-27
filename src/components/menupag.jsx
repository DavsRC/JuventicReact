import React from "react";
import "../assets/css/menupag.css";
import { Link } from "react-router-dom";

function Menunav() {
    return (
    <div className="container menupag">
    <div className="row row-cols-5 py-5 my-5 border-top">
      <div className="col">
        <a to="/" className="d-flex-menupag align-items-center mb-3 Link-dark text-decoration-none">
        </a>
        <p className="text-muted primeracol" >&copy;2021 Para navegar por nuestra pagina te presentamos el siguiente menudonde encontraras los enlaces a la informacion que necesites</p>
      </div>
  
      <div className="col">
  
      </div>
      <div className="col">
        <h5>Productos</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Menu" className="nav-Link p-0 text-muted">Menu</Link></li>
          <li className="nav-item mb-2"><Link to="/Servicio" className="nav-Link p-0 text-muted">Servicios</Link></li>
          <li className="nav-item mb-2"><Link to="/Carro" className="nav-Link p-0 text-muted">Carro</Link></li>
        </ul>
      </div>
  
      <div className="col">
        <h5>Relaciones</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Contacto" className="nav-Link p-0 text-muted">Contacto</Link></li>
          <li className="nav-item mb-2"><Link to="/Reserva" className="nav-Link p-0 text-muted">Reservas</Link></li>
        </ul>
      </div>
  
      <div className="col">
        <h5>Sobre Nosotros</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/Acerca" className="nav-Link p-0 text-muted">Acerca</Link></li>
          <li className="nav-item mb-2"><Link to="/Mapa" className="nav-Link p-0 text-muted">Mapa</Link></li>
        </ul>
      </div>
    </div>
  </div>
    );
}

export default Menunav;