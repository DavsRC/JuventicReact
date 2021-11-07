import React, {useEffect, useState} from "react";


function useListarPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("json/pedido.json")
      .then((response) => response.json())
      .then((datos) => {
        setPedidos(datos);
      });
  }, []);

  return pedidos;
}

export default function PedidosUsuario() {
  const pedidos = useListarPedidos();

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map(item =>(
            <tr key = {item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad}</td>
                <td>{item.precioTotal}</td>
                
            </tr>
        ))}
      </tbody>
    </table>
  );
}
