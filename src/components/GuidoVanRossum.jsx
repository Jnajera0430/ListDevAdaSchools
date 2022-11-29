import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
function GuidoVanRossum() {
  return (
    <>
      <div className='contenedor-img'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg" />
      </div>
      <article>
        <h2>Guido van Rossum</h2>
        <p>
          Conocido por ser el autor del lenguaje de programación Python. Nació y
          creció en los Países Bajos. Es la primera persona en obtener el título
          BDFL (Benevolent Dictator for Life), cuyo título es otorgado a
          personajes importantes en el mundo del código abierto, teniendo
          asignada la tarea de fijar las directrices sobre la evolución de
          Python, así como la de tomar decisiones finales sobre el lenguaje que
          todos los desarrolladores acatan. Van Rossum tiene fama de ser
          bastante conservador, realizando pocos cambios al lenguaje entre
          versiones sucesivas, intentando mantener siempre la compatibilidad con
          versiones anteriores. El 12 de julio de 2018, con un mensaje enviado a
          la lista de python-committers, anunció su retiro de los procesos de
          decisión.2​
        </p>
      </article>
      <Link to={'/'}>Home</Link>
    </>
  );
}

export default GuidoVanRossum;
