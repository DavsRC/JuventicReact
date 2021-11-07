import React from "react";
import Pedido from "../components/Carrito/Pedido";

import "../pages/style/style.css";

class Carrito extends React.Component {
  render() {
    return (
      <div className="contenedor-carro">
        <div className="cover-carro">
          <div className="container">
            <div className="container">
              <div className="col-12">
                <div className="col justify-center titulo-carro">
                  <p>Carrito de Compras</p>
                </div>
              </div>
              <div className="col-12">
                <Pedido />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Carrito;
