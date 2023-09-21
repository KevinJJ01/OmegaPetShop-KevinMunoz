import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/contentHeader';
import Footer from '../componentes/footer';
import { Link } from 'react-router-dom';
import huellaicon from '../../src/images/huellaicon.jpg'



const Home = () => {
    return(
        <div  className="wrapper">
            <Navbar ></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader 
                    titulo={"Bienvenido"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"Home"}
                    
                />

                <section  style={{backgroundColor : "#000000", backgroundImage:("radial-gradient(circle, #EAFAF1 4px, transparent 140px"),  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                className="content">
                    
                    <div img src={huellaicon}className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} className="inner">
                            <h3>Comida perritos !</h3>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Aqui encontraras diferentes tipos de comida para tu mascota, igualmente por diferente cantidad </p>
                        </div>
                        </div>
                    </section>

                    <section style={{backgroundColor : "#000000", backgroundImage:("radial-gradient(circle, #EAFAF1 4px, transparent 140px"),  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                    className="content" >
                    <div className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} className="inner">
                            <h3>Juguetes perritos !</h3>

                            <p>&nbsp;</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Aqui encontraras diferentes tipos de comida para tu mascota, igualmente por diferente cantidad </p>
                        </div>
                        </div>
                    </section>

                    <section style={{backgroundColor : "#000000", backgroundImage:("radial-gradient(circle, #EAFAF1 4px, transparent 140px"),  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                     className="content">
                    <div className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} className="inner">
                            <h3>Accesorios perritos !</h3>

                            <p>&nbsp;</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Aqui encontraras diferentes tipos de comida para tu mascota, igualmente por diferente cantidad </p>
                        </div>
                        </div>
                    </section>

                    <section style={{backgroundColor : "#000000", backgroundImage:("radial-gradient(circle, #EAFAF1 4px, transparent 140px"),  backgroundSize: "20px 20px", backgroundPosition: "center center", backgroundAttachment: "fixed", margin: "40px"}}
                    className="content">
                    <div className="container-fluid"></div>
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                            <div style={{marginTop: "10px", backgroundColor: "#82E0AA", borderColor : "#82E0AA", color: "black"}} className="inner">
                            <h3>Aseo para perritos !</h3>

                            <p>&nbsp;</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <Link to={"/productosPet"} className='small-box-footer'>Ver Productos <i className='fas fa-arrow-circle-right'></i></Link>
                        </div>
                        <p style={{textAlign: "center", textAlignLast:"inherit"}}>Aqui encontraras diferentes tipos de comida para tu mascota, igualmente por diferente cantidad </p>
                        </div>
                        </div>
                    </section>

                    

                    
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;