import React from "react";

class FrmCompra extends React.Component {
  render() {
    return (
      <section className="d-flex justify-content-center">
        <div className="card col-md-7 p-4">
          <h3>Contacto</h3>
          <form>
            <div className="form-group col-12 flex-direction-center">
              <label htmlFor="">Nombres y Apellios</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ej: Juan Valdez"
              ></input><br />
              <label htmlFor="">Correo</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ej: davinsonrc78@gmail.com"
              ></input><br />
              <label htmlFor="">Telefono</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ej: (+57) 312 605 1478"
              ></input><br />
                           
            </div>
            <div>
            <button type="submit" className="btn btn-success col-12" >Finalizar Compra</button>
            </div>
            
           
          </form>
        </div>
      </section>
    );
  }
}
export default FrmCompra;
