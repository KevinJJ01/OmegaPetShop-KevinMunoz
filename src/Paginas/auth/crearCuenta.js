import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const CrearCuenta =()=>{
    const[usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });
    const[nombre, email, password, confirmar]= usuario;

    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.targe.name]: e.target.value
        })
    }

    useEffect(()=>{
        document.getElementById("nombre").focus();
    },[]);

    const onSubmit = (e) =>{
        
    }

    return (
        <div class="hold-transition login-page">
        <div class="login-box">
          <div class="login-logo">
            <Link to={"#"}><b>Crear</b>Cuenta</Link>
          </div>
         
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Bienvenido. ingrese sus credenciales</p>
        
              <form onSubmit={onSubmit}>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Email"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" placeholder="Password"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                
              
        
              <div class="social-auth-links text-center mb-3">
                <button type="submit" class="btn btn-block btn-primary"> Ingresar
                </button>
                <Link to={"CrearCuenta"} type="submit" class="btn btn-block btn-danger" > Crear cuenta
                </Link>
              </div>
              </form>
             
        
            </div>
        
          </div>
        </div>
        </div>);
}