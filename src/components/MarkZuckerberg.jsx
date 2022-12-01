import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
function MarkZuckerberg() {
  return (
    <>
      <div className='contenedor-img'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" />
      </div>
      <article>
        <h2>Mark Zuckerberg</h2>
        <p>
          Mark Elliot Zuckerberg (White Plains, Nueva York; 14 de mayo de 1984)
          es un programador y empresario estadounidense, uno de los creadores y
          fundadores de Facebook (desde 2021, Meta Platforms) y la red social
          homónima, y su actual presidente. Para desarrollar la red, Zuckerberg
          contó con el apoyo de sus compañeros de la Universidad de Harvard, el
          coordinador de ciencias de la computación y sus compañeros de
          habitación Eduardo Saverin, Dustin Moskovitz y Chris Hughes.
          <br />
          En abril de 2018, fue el personaje más joven en aparecer en la lista
          de multimillonarios de la revista Forbes, con una fortuna valorada en
          73.200 millones de dólares, convirtiéndose en la octava persona más
          rica del mundo.
        </p>
      </article>
      <Link to={'/'}>Home</Link>
    </>
  );
}

export default MarkZuckerberg;
