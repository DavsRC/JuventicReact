import React, { Component } from "react";
import Menu from "./Menus";
import './Carrito/Carrito';
import plato1 from "../assets/img/platosmenu/plato1.jpg";
import plato2 from "../assets/img/platosmenu/plato2.jpg";
import plato3 from "../assets/img/platosmenu/plato3.jpg";
import plato4 from "../assets/img/platosmenu/plato4.jpg";
import plato5 from "../assets/img/platosmenu/plato5.jpg";
import plato6 from "../assets/img/platosmenu/plato6.jpg";
import plato7 from "../assets/img/platosmenu/plato7.jpg";
import plato8 from "../assets/img/platosmenu/plato8.jpg";
import plato9 from "../assets/img/platosmenu/plato9.jpg";
import plato10 from "../assets/img/platosmenu/plato10.jpg";
import plato11 from "../assets/img/platosmenu/plato11.jpg";
import plato12 from "../assets/img/platosmenu/plato12.jpg";

class Platos extends Component {
  render() {
    return (
      <div className="container-fluid-menu d-flex jusify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Menu
              imgsrc={plato1}
              precio="25000"
              nombreplato="Pizza de ciruela"
              descripcion="de ciruela tocineta Descubre el sabor todas las recetas de pizza de ciruela tocineta de entre miles de recetas la mejor opción de la cocina."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato2}
              precio="30000"
              nombreplato="Mortadela con Milanesa"
              descripcion="Ingredientes: Mortadela Primavera Sofía; Queso Mozzarella; Pan Molido; 2 Huevos; Comino; Mostaza; Sal; Pimienta. ¡No te lo puedes perder!"
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato3}
              precio="25000"
              nombreplato="Stracciatella"
              descripcion="de queso italiano en un plato pequeño servido con tomate fresco y albahaca, el sabor gourmet italiano a minutos de tu paladar, descuesto para citas dobles."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato4}
              precio="25000"
              nombreplato="Pizza Vegetariana"
              descripcion="hemos enternecido las verduras al fuego o sencillamente con unos minutos de microondas. El resultado es que todas las verduras quedan en su punto, ¡¡perfectas!!"
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato5}
              precio="46000"
              nombreplato="Langosta Italiana"
              descripcion="Langosta, camarón y queso parmesano Scampi Una cola de ajo y el romero a la parrilla de langosta de Maine y la brocheta de langostinos, ¡imperdible!"
              tiempo="40 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato6}
              precio="25000"
              nombreplato="Lasaña Italiana"
              descripcion="La 'Lasagne alla bolognese' es un plato tan exquisito como fácil de preparar una vez que cogemos el truco al proceso, lo tendrás en tu mesa en minutos."
              tiempo="30 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato7}
              precio="35000"
              nombreplato="Camaronne Stand"
              descripcion="En salsa oriental con camarones, espárragos frescos, tomates cherry, cebolla caramelizada, champiñón portobello y... Elige tu tipo de pasta."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato8}
              precio="25000"
              nombreplato="Pizza Salsiccia"
              descripcion=" La pizza de Salsiccia es una excelente opción cuando se trata de disfrutar de esta receta mundialmente famosa… Pregunta por nuestra descuento familiar."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato9}
              precio="25000"
              nombreplato="Creamy Garlic Parmesan Wing"
              descripcion="La receta casera de nuestro restaurante Parmesan Wings es diferente porque es una cobertura muy suave en comparación con su atrevido búfalo."
              tiempo="15 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato10}
              precio="25000"
              nombreplato="Vegan Pizza"
              descripcion="no incluye ningún producto animal ni producido por animales. No sólo se evita la carne y el pescado, sino que tampoco se consumen huevos, leche ni miel."
              tiempo="20 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato11}
              precio="35000"
              nombreplato="Ravioles Veganos"
              descripcion="Exquisitos raviolis veganos de setas. Si eres un adicto a la pasta te tienes que atrever con este delicioso plato, uno de los más apetecidos de la casa."
              tiempo="30 Min"
            />
          </div>
          <div className="col-md-4">
            <Menu
              imgsrc={plato12}
              precio="25000"
              nombreplato="Pappardelle"
              descripcion="es una especie de fettuccine anchas. El nombre deriva del verbo “pappare” que en italiano se traduce como: engullir. de dos a tres centímetros de anchura."
              tiempo="20 Min"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Platos;
