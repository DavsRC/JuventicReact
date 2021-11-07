import React, { Fragment } from "react";

import FrmCompras from './FrmCompra';

class Pedido extends React.Component {
  render() {
    return (
      
      <div className="row justify-center">
        <navbar />
        <div className="col-md-10  carrito">
          <br />
          <table className="table table-hover">
            <thead>
              <tr className="text-danger">
                <th scope="col">Productos</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody className="tbody">
              
            </tbody>
          </table>
          <br />
          <div className="row mx-4">
            <h3 className="itemCarTotal Text-dark">Total:0</h3>
          </div>
        </div>
        <div>
          <FrmCompras />
        </div>
      </div>
    );
  }
}
export default Pedido;
