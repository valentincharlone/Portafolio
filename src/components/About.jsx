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
            Hola, mi nombre es Valentin Charlone, vivo y estudio en Tandil, tengo 23 años 
            y soy desarrollador web full stack
            con muchas ganas de introducirme al mundo laboral. Me apasiona
            crear soluciones innovadoras y estoy siempre buscando aprender
            nuevas habilidades y tecnolgias.
          </p>
          <p>
            Me considero una persona proactiva, soy capaz de
            adaptarme a un grupo de trabajo rapidamente y poder aportar
            buenas energías.
          </p>
          <p>
            Mi objetivo principal es poder encontrar mi primer empleo
            ya sea como desarrollador Front-end o Back-end,
            priorizando la experiencia y el trabajo en equipo. 
          </p>
          <p>
            En este momento me encuentro estudiando una carrera a fines informaticos y/o tecnologicos - TUDAI,
            en la Facultad de Ciencias Exactas Tandil.
            Ademas tengo certificaciones de cursos realizados en JavaScript y React
          </p>
          <h3>Adjunto CV</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
