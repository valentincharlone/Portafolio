import React from "react";
import yo from '../assets/yo.jpg'



const About = () => {

  

  return (
    <section id="about" className="about">
      <div className="about-section" >
        <h2>ABOUT</h2>
        <img src={yo} alt="Mi imagen" className="about-image" />
        <div className="about-description" >
          <p>
            Hola, mi nombre es [tu nombre] y soy un desarrollador web con
            experiencia en [habilidades o tecnologías específicas]. Me apasiona
            crear soluciones innovadoras y estoy siempre buscando aprender
            nuevas habilidades.
          </p>
          <p>
            En mi tiempo libre disfruto de [intereses o pasatiempos] y me
            encanta viajar. Si estás interesado en trabajar conmigo o
            simplemente quieres saber más sobre mi trabajo, no dudes en ponerte
            en contacto conmigo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
