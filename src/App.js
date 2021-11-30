import "./assets/css/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footercom";
import Menu from "./components/Platos";
import ListaPedidos from "./pages/ListaPedidos";
import Acerca from "./pages/Acerca";
import Carro from "./pages/Carro";
import Contacto from "./components/Contactos";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Reserva from "./components/Reservas";
import Mapa from "./pages/Mapa"
import NavApi from "./pages/NavApi";
import AdmMenu from "./pages/AdmMenu";
import AdmServicios from "./pages/AdmServicios";
import ReseNa from "./components/ReseNa";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>

          <Navbar />
          <div className="page-container">
            <Route path="/Acerca" component={Acerca} />
            <Route path="/Servicios" component={Servicios} />
            <Route path="/" exact component={Inicio} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Reserva" component={Reserva} />
            <Route path="/Contacto" component={Contacto} />
            <Route path="/Carro" component={Carro} />
            <Route path="/Mapa" component={Mapa} />
            <Route path="/ListaPedidos" component={ListaPedidos} />
            <Route path="/NavApi" component={NavApi} />
            <Route path="/AdmMenu" component={AdmMenu} />
            <Route path="/AdmServicios" component={AdmServicios} />
            <Route path="/ReseNa" component={ReseNa} />
          </div>
           <Footer /> 
        </Router>
      </div>
    </div>
  );
}

export default App;
