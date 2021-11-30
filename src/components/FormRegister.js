import React from "react";
import { Link } from "react-router-dom";

class FormRegister extends React.Component {
    render() {
        return (
            <div className="container-fluid  mb-5" id="formulario_login">

                <div className="container">
                    <h1 className="text-center title text-light">Registro de Usuario</h1>
                </div>

                <div className="container">
                    <form className="form">

                        <div className="mb-3">
                            <input type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Nombres" required/>
                        </div>

                        <div className="mb-3">
                            <input type="text" class="form-control" name="Apellidos" id="Apellidos" placeholder="Apellidos" required/>
                        
                        </div>

                        <div className="mb-3">
                            <input type="email" class="form-control" name="Email" id="Email" placeholder="Email" required/>
                        </div>

                        <div className="mb-3">
                            <input type="password" class="form-control" name="Contraseña" id="Contraseña" placeholder="Contraseña" required/>
                        </div>

                        <div className="mb-3">
                            <input type="text" class="form-control" name="Direccion" id="Direccion" placeholder="Direccion" required/>
                        
                        </div>

                        <button id="btnlogin" className="btn btn-success btn1" type="submit">Registrarse</button>
                    </form>
                </div>
                <h1 className="text-center text-light">-----o-----</h1>
                <div>
                    <button id="btn_login" className="btn btn-success btn2" ><Link to="/Login">Iniciar sesion</Link></button>
                </div>
            </div>

        );
    }
}

export default FormRegister;