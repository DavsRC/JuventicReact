import React from "react";
import "../assets/css/footer.css";
import Mapa from "../assets/img/Mapa.JPG";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <footer>
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>PIZZA LA ITALIANA</h4>
              <h1 className="list-unstyled">
                <img src={Mapa} alt="mapa" className="card-img-top imgmapa" />
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>PIZZA LA ITALIANA</h4>
              <h1 className="list-unstyled">
                <li>+57 312 603 78 89</li>
                <li>Bogota, Colombia</li>
                <li>Cl. 122 15a-24, Bogotá, Cundinamarca</li>
              </h1>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>REDES</h4>
              <ui className="list-unstyled">
                <li>
                  {" "}
                  <a href="https://www.facebook.com/Colnodo/">FACEBOOK</a>
                </li>
                <li>
                  {" "}
                  <a href="https://twitter.com/Colnodo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    TWITTER
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.instagram.com/colnodo/?hl=es">
                    INSTAGRAM
                  </a>
                </li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} PIZZA LA ITALIANA | Todos los
              derechos reservados | Terminos de Servicio | Juventic | <Link to="/NavApi">
                    Administracion
                  </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
