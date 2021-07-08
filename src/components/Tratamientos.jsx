import React from 'react'
import '../utils/CSS/Tratamientos.estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../utils/images/logo.jpg';
import Tratamiento1 from '../utils/images/Trata1.jpg'
import Tratamiento2 from '../utils/images/Trata2.jpg'
import Tratamiento3 from '../utils/images/Quemadores_grasa.jpg'
import Tratamiento4 from '../utils/images/Masaje_relajante.jpg'
import Tratamiento5 from '../utils/images/Limpieza_profunda.jpg'
import Tratamiento6 from '../utils/images/hidratacion_facial.jpg'
import Facebook from '../utils/images/facebook.png'
import Instagram from '../utils/images/instagram.png'
import WhatsApp from '../utils/images/whatsapp.png'
import {Link} from 'react-router-dom'

const Tratamientos = () => {
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

            {/* -----------TRATAMIENTOS---------------------- */}
            <section className="fon">
                <div className="bloque">
                    <p className="trata_titul">TRATAMIENTOS</p>
                    <div className="lado">
                        <div className="tratamientos_image">
                            <img src={Tratamiento1} alt="1trata" />
                        </div>
                        <div className="info_tratamientos">
                            <div className="rosy">
                                El tratamiento de levantamiento de glúteos consiste en que, por medio de la estimulación eléctrica de la fibra muscular glútea, radiofrecuencias y variedad de técnicas y procedimientos, se consigue dar mayor tonificación al músculo lo que significa aumento de masa y fuerza muscular.
                                <div className="conten_boton">
                                    <button type="button" className="precio_boton">Precio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fon3">
                <div className="lado">
                    <div className="info_tratamientos">
                        <div className="rosita2">
                            La bioestimulación facial con plasma, es un tratamiento que que estimula la regeneración de colágeno perdido con el paso de los años y ayuda a combatir la flacidez, el envejecimiento prematuro del rostro, cuello, escote y manos, suaviza las cicatrices, ojeras, estrías y revitaliza la zona capilar.
                            <div class="conten_boton">
                              <button type="button" class="precio_boton">Precio</button>
                            </div>
                        </div>
                    </div>
                    <div className="tratamientos3_image">
                        <img src={Tratamiento2} alt="2trata" />
                    </div>
                </div>
            </section>

            <section className="fon3">
                <div className="lado">
                    <div className="tratamientos2_image">
                        <img src={Tratamiento3} alt="3trata" />
                    </div>
                    <div className="info_tratamientos">
                        <div className="rosita">
                            La mesoterapia (quemadores de grasa) consiste en pequeñas inyecciones en las zonas donde quieres despedirte de esos kilillos. Se inyecta un cóctel de vitaminas, aminoácidos, minerales y antioxidantes que se encargan de disolver la grasa y expulsarla a través de la orina.
                            <div class="conten_boton">
                              <button type="button" class="precio_boton">Precio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fon3">
                <div className="lado">
                    <div className="info_tratamientos">
                        <div className="rosita2">
                            El masaje relajante consiste en la realización de maniobras superficiales en las que la intensidad de la presión es suave y el ritmo lento y reiterativo, de manera que al recibir un contacto repetido y constante, se pierde la sensación de dolor y los músculos se relajan, Una sensacion unica.
                            <div class="conten_boton">
                              <button type="button" class="precio_boton">Precio</button>
                            </div>
                        </div>
                    </div>
                    <div className="tratamientos3_image">
                        <img src={Tratamiento4} alt="4trata" />
                    </div>
                </div>
            </section>

            <section className="fon3">
                <div className="lado">
                    <div className="tratamientos2_image">
                        <img src={Tratamiento5} alt="5trata" />
                    </div>
                    <div className="info_tratamientos">
                        <div className="rosita">
                        Una limpieza facial profunda permite que la piel respire y se libre de todo tipo de suciedad, manteniendo un aspecto saludable, estimulando la producción de colágeno, elastina y reticulina de manera natural mejorando asi la absorción de cremas y productos hidratantes y nutritivos.
                            <div class="conten_boton">
                              <button type="button" class="precio_boton">Precio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fon3">
                <div className="lado">
                    <div className="info_tratamientos">
                        <div className="rosita2">
                        La hidratación facial consiste en lograr una mayor proporción de agua en la piel y el aumento de formación de colágeno, fibras elásticas y reticulares a través de distintas técnicas básicas para comenzar un verdadero proceso de rejuvenecimiento quedando bella e hidratada.
                            <div class="conten_boton">
                              <button type="button" class="precio_boton">Precio</button>
                            </div>
                        </div>
                    </div>
                    <div className="tratamientos3_image">
                        <img src={Tratamiento6} alt="6trata" />
                    </div>
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

export default Tratamientos;