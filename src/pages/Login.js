import React from "react";
import './style/login.css';
//import './../components/style/reservas.css';
import Formlogin from "../components/Formlogin";
class Login extends React.Component {
    render() { 
        return(
            <div className="body">
            <div className="formulario_login">
                <Formlogin/> 
            </div>
            </div>
          
             
        ) ;
    }
}
 
export default Login;