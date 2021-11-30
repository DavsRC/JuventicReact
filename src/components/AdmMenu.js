import React from "react";
import "../assets/css/admmenu.css"

class Admmenu extends React.Component {
    render() { 
        return(
            <div className="container d-flex" >
                 <div className="container-fluid mt-5 mb-3" id="adm">
                        <form className="form ml-1 formcontainer" >
                            <div className="mb-3">
                            <button id="btn" type="file" className="btn btn-outline-dark">Seleccionar Imagen</button>
                            </div>

                            <div className="mb-3">

                                <input type="text" name="name" className="form-control" placeholder="Nombre del Plato" pattern="[A-Z a-z]+" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">

                                <input type="number" name="name" className="form-control" placeholder="Precio" pattern="[A-Z a-z]+" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3" >

                                <textarea name="message" rows="3" placeholder="Descripcion del Plato" minLength="10" maxLength="190" required></textarea>

                            </div>

                            <div className="mb-3">

                                <input type="number" name="message" className="form-control" placeholder="Tiempo de Preparacion" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>
                            
                            <div className="btn-group-vertical">
                            <button className="btn-1" type="submit" className="btn btn-primary">Añadir al Menu</button>
                            <button className="btn-2" type="submit" className="btn btn-danger">Eliminar/Editar Platos</button>
                            </div>

                        </form>

                    </div>
                    
                    </div>
             );
    }
}
 
export default Admmenu;