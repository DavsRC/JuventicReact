import React from "react";
import { Link } from "react-router-dom";
import "./style/styleNavbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="menu">
        <label className="logo">La Italiana</label>
        <ul className="menu_items menu_items_visible">
          <li>
            <Link to="/Acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/Servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reserva">Reserva</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/Mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/Carro">
              
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
        <span className="btn_menu">
          <i className="fa fa-bars"></i>
        </span>
      </nav>
    );
  }
}
export default Navbar;
