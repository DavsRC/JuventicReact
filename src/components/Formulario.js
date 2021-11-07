import React from "react";

class Formulario extends React.Component {
    render() { 
        return(
             
                 <div className="container-fluid mt-5 mb-3" id="formulario">
                        <form action="https://formsubmit.co/jbfigueroa2000@gmail.com" method="POST" className="form ml-1" >
                            <div className="mb-3">
                                <select name="_subject" className="form-control" required>
                                    <option >Seleccione el servicio</option>
                                    <option >Celebración de cumpleños</option>
                                    <option >Aniversarios</option>
                                    <option >Fiestas infantiles</option>
                                    <option >Declaracion o propuestas</option>
                                    <option >Despedidas</option>
                                    <option >Cena con amigos</option>
                                </select>
                            </div>

                            <div className="mb-3">

                                <input type="email" id="correo" name="email" placeholder="Correo electronico" className="form-control" minLength="5" maxLength="50" required />
                            </div>

                            <div className="mb-3">

                                <input type="text" name="name" className="form-control" placeholder="Nombre completo" pattern="[A-Z a-z]+" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">

                                <input type="number" name="message" className="form-control" placeholder="Telefono" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>


                            <div className="mb-3">

                                <input type="number" name="message" className="form-control" placeholder="Numero de personas" minLength="5" maxLength="50" required id="exampleInputPassword1" />
                            </div>


                            <div className="mb-3">

                                <input type="datetime-local" name="message" className="form-control" placeholder="Fecha y hora de Reserva" required id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3" >

                                <textarea name="message" rows="3" placeholder="Indicacionies especiales" minLength="10" maxLength="190" required></textarea>

                            </div>

                            <input type="hidden" name="_cc" value="" id="cliente" />

                            <input type="hidden" name="_autoresponse" value="Hola apreciado cliente, te enviamos copia del correo." />

                            <button id="btn" type="submit" className="btn btn-primary">Enviar</button>
                            <input type="hidden" name="_next" value="http://127.0.0.1:5500/Reserva.html" />
                        </form>

                    </div>
             
             );
    }
}
 
export default Formulario;