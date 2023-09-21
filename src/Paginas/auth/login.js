import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';
import fondo from '../../images/fondo.jpg';
import pestaña from '../../componentes/pestaña';
const Login = () =>{

    //redirect login 
    const navigate = useNavigate();

    //definit initial state
    const[usuario, setUsuario] = useState({
      email: '',
      password:''
    });

    const{email, password} =usuario;

    const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    document.getElementById("email").focus();
},[])

const iniciarSesion = async () => {
   if(password.length < 6){
    const msg = "La contraseña debe ser al menos de 6 caracteres";
    swal(
      {
        title: 'Error',
        text: msg, 
        icon: 'error',
        buttons: {
          confirm:{
            text:'OK',
            value:true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      }
    );
   }else{
    const data = {
      email: usuario.email,
      password: usuario.password
    }
    const  response = await APIInvoke.invokePOST("/auth", data);
    const  mensaje = response.msg;

    if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta'){
      const msg = "Un de los datos ingresados es incorrecto, por favor verifica ";
      swal(
        {
          title: 'Error',
          text: msg, 
          icon: 'error',
          buttons: {
            confirm:{
              text:'OK',
              value:true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        }
      );
    }else {
      //obtener token 
      const jwt = response.token;
      //guardar token en localstorage
      localStorage.setItem('token', jwt);
      //redireccionamiento al dash board 
      navigate("/Home");
      
    }
   }
}

const onSubmit = (e) => {
  e.preventDefault();
  iniciarSesion();
}

    return (


    <div style={{backgroundColor : "#000000", backgroundImage:("radial-gradient(circle, #EAFAF1 4px, transparent 140px"),  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed"}}
    className="hold-transition login-page">
    
    <div className="login-box">
      <div className="login-logo">
        <Link to={"#"} style={{fontSize:"50px", color: "#000000"}}><b style={{fontSize:"70px"}}>Omega</b>PetShop</Link>
      </div>
     
      <div className="card" >
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido, ingrese sus credenciales para iniciar sesión</p>
    
          <form  onSubmit={onSubmit}>
            <div  className="input-group mb-3">
              <input style={{color: "#239B56", borderColor: "#239B56"}} type="email" 
              className="form-control" 
              placeholder="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span style={{color: "#239B56", borderColor: "#239B56"}}  className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input style={{color: "#239B56", borderColor: "#239B56"}} type="password"
               className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span style={{color: "#239B56"}} className="fas fa-lock" ></span>
                </div>
              </div>
            </div>
            
          
    
          <div className="social-auth-links text-center mb-3">
            <button style={{backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} type="submit" className="btn btn-block btn-primary" > Ingresar
            </button>
            <Link to={"crear-cuenta"} style={{backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} type="submit" className="btn btn-block btn-danger" > Crear cuenta
            </Link>
          </div>
          </form>
         
    
        </div>
    
      </div>
    </div>
    </div>);
}

export default Login;