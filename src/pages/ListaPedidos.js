import React from "react";

import PedidosUsuario from "../components/PedidosUsuario";
import "../pages/style/style.css";

class ListaPedidos extends React.Component {
  render() {
    return (
      <div className="listaPedidos container-fluid ">
        <div className="contenedor-carro">
          <div className="cover-carro">
            <div className="container-fluid">
              <div className="container">
                <div className="col-12">
                  <div className="col justify-center titulo-carro">
                    <p>Mis Pedidos</p>
                  </div>
                </div>
                <div className="col-12">
                  <PedidosUsuario />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListaPedidos;
