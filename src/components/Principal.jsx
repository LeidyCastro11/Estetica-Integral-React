import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../utils/images/logo.jpg'
import Lipo from '../utils/images/lipo.jpeg'
import Facebook from '../utils/images/facebook.png'
import Instagram from '../utils/images/instagram.png'
import WhatsApp from '../utils/images/whatsapp.png'
import {Link} from 'react-router-dom'

const Principal = () => {
    return (
    
        <div className="contenedor"> {/*Contenedor principal*/}

            {/*---------------------- CEBECERA---------------------- */}
            <div className="cabecera">
                <img src={Logo} alt="Este es el logo" />
                    <div className="cabeceraTitle">
                        <p className="title">ESTETICA INTEGRAL</p>
                        <p className="title2"> Yazmin López</p>
                    </div>
            </div>

            {/* -------------------------MENU------------------------ */}
            <nav class="menu">
              <ul>
                <Link to="/">
                    <li> Quiénes somos</li>
                 </Link>
                 <Link to="/tratamientos">
                 <li> Tratamientos</li>
                 </Link>
                 <Link to="/">
                    <li> Precios</li>
                 </Link>
                 <Link to="/tratamientos">
                 <li>Contacto</li>
                 </Link>
              </ul>
            </nav>

            {/* -----------QUIENES SOMOS---------------------- */}
            <section className="fon2">
                <div className="imalipo">
                    <img src={Lipo} alt="lipo" />
                </div>
                <div className="contenidoQuienes">
                    <p className="quienes">¿QUIENES SOMOS?</p>
                    <br />
                    <p className="conten">
                        Maryah Home es una empresa que promueve la buena salud estética y lo más importante la seguridad y bienestar de nuestros clientes contando así con tratamientos de limpieza facial, hidratación, levantamiento y tonificación de glúteos ofreciendo calidad en cada procedimiento, entrega y comodidad para cada persona que desea lucir alucinante.
                    </p>
                </div>
            </section>
            
            {/* ------CONTACTO---- */}
            <section>
                <article className="info">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">Síguenos</div>
                        <div className="col-4">Contáctenos</div>

                        <div className="row">
                            <div className="col-4">
                                <p>Maryah Home te ofrece un ambiente lleno de amor y calidad</p>
                            </div>
                            <div className="col-7">
                                <div className="col-2">
                                    <a href="https://www.facebook.com"><img src={Facebook} alt="Face" /></a>
                                    <a href="https://www.instagram.com"><img src={Instagram} alt="insta" /></a>
                                </div>
                                <div className="col-1">
                                    <a href="https://www.whatsapp.com/"><img src={WhatsApp} alt="whats" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <footer className="pie_de_pagina">
                  Copyright@ 2021 l Yazmin Lopez. Todos los derechos reservados. Kuepa, Tech Power.
            </footer>
        </div>

    )
}

export default Principal;