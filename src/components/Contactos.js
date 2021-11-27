import React from "react";

class Contacto extends React.Component {

    render() {
        return (
            <div className="container d-flex" >
                <aside className="contacto">
                    <section>
                        <h1>contacto</h1>
                        <div className="contactar">

                            <p className="text-dark">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error dolorum nisi numquam
                                cupiditate deleniti autem esse maiores, recusandae doloribus itaque facilis veniam iure, quibusdam
                                possimus maxime dolore sunt? Recusandae.
                                Eveniet, animi inventore voluptate quae beatae, nisi itaque at, asperiores quasi ea ut ab molestias
                                harum laborum! Quaerat magni doloribus tempore, veritatis porro magnam reprehenderit omnis minus
                                cumque ratione! Veniam.
                            </p>

                            <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi rem? Voluptate inventore ipsa
                                illum voluptatem magni atque pariatur? Tenetur sapiente officiis magni atque, illum corporis.
                                Mollitia deleniti vero obcaecati?
                                Magni voluptates ut libero soluta natus provident possimus. Fuga non aspernatur illum amet,
                                excepturi velit eveniet enim earum nemo recusandae aperiam, autem impedit quae quisquam quaerat,
                                debitis officia et. Inventore.
                            </p>
                        </div>
                    </section>
                </aside>

                <div className="formulario">
                    <div className="container-fluid mt-5 mb-3" id="formulario">
                        <form action="https://formsubmit.co/jbfigueroa2000@gmail.com" method="POST" className="form ml-1" >
                            <div className="mb-3">

                                <input type="text" name="_subject" className="form-control" placeholder="Asunto" pattern="[A-Z a-z]+" minLength="5" maxLength="50" required id="exampleInputPassword1" />

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

                            <div className="mb-3" >

                                <textarea name="message" rows="3" placeholder="Indicacionies especiales" minLength="10" maxLength="190" required></textarea>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className ="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                            </div>

                            <input type="hidden" name="_cc" value="" id="cliente" />

                            <input type="hidden" name="_autoresponse" value="Hola apreciado cliente, te enviamos copia del correo." />

                            <button id="btn" type="submit" className="btn btn-primary">Enviar</button>
                            <input type="hidden" name="_next" value="http://127.0.0.1:5500/Reserva.html" />
                        </form>

                    </div>
                </div>

            </div>
        );
    }

} export default Contacto;