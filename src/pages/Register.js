import React from "react";
import './style/login.css';
import FormRegister from "../components/FormRegister";
class Register extends React.Component {
    render() { 
        return(
             <div className="body">
                 <div className="formulario_login">
                     <FormRegister />
                 </div>
                 
             </div>
                
             
             
             );
    }
}
 
export default Register;