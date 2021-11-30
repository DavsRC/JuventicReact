import React from "react";
import "../assets/css/admmenu.css"

class Admservicios extends React.Component {
    render() { 
        return(
            <div className="container d-flex" >
                 <div className="container-fluid mt-5 mb-3" id="servicios">
                        <form className="form ml-1 formcontainer" >
                            <div className="mb-3">
                            <button id="btn" type="file" className="btn btn-outline-dark">Seleccionar Imagen</button>
                            </div>

                            <div className="mb-3">

                                <input type="text" name="name" className="form-control" placeholder="Nombre del Servicio" pattern="[A-Z a-z]+" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3" >

                                <textarea name="message" rows="3" placeholder="Descripcion del Servicio" minLength="10" maxLength="190" required></textarea>

                            </div>
                                
                            <div className="btn-group-vertical">
                            <button className="btn-1" type="submit" className="btn btn-primary">Añadir a Servicios</button>
                            <button className="btn-2" type="submit" className="btn btn-danger">Eliminar/Editar Servicio</button>
                            </div>

                        </form>

                    </div>
                    
                    </div>
             );
    }
}
 
export default Admservicios;