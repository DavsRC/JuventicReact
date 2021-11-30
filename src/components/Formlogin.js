import React from "react";
import { Link } from "react-router-dom";

class Formlogin extends React.Component {
    render() {
        return (
            <div className="container-fluid  mb-5" id="formulario_login">

                <div className="container">
                    <h1 className="text-center title text-light">Inicio de sesion</h1>
                </div>

                <div className="container">
                    <form className="form">

                        <div className="mb-3">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
                        </div>

                        <div className="mb-3">
                            <input type="password" class="form-control" name="contraseña" id="contraseña" placeholder="Contraseña" required/>
                        </div>

                        <button id="btnlogin" className="btn btn-success btn1" type="submit">Ingresar</button>
                    </form>
                </div>
                <h1 className="text-center text-light">-----o-----</h1>

            
                    <div>
                    <button id="btn_login" className="btn btn-success btn2"><Link to="/Register">Registrarse</Link></button>
                    </div>

            </div>
        );
    }
}

export default Formlogin;