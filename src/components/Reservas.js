import React from "react";
import '../components/style/reservas.css';
import Formulario from "./Formulario";
class reservas extends React.Component {
    render() {
        return (
            
            <div className="container d-flex" >
                <aside className="contacto">
                    <section>
                        <h1>Reserva</h1>
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
                    <Formulario/>
                </div>

            </div>
        );

    }
}

export default reservas;