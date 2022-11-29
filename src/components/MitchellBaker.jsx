import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
function MitchellBaker() {
  return (
    <>
      <div className='contenedor-img'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Mitchell_Baker.jpg" />
      </div>
      <article>
        <h2>Winifred Mitchell Baker</h2>
        <p>
          más conocida como Mitchell Baker, es la presidenta de la Fundación
          Mozilla y la Presidenta y Directora Ejecutiva de la Corporación
          Mozilla, filial de la Fundación Mozilla que coordina el desarrollo de
          las aplicaciones de Internet de código abierto Mozilla, incluyendo el
          navegador Mozilla Firefox y el cliente de correo electrónico Mozilla
          Thunderbird.
          <br />
          Licenciada en derecho, Baker coordina tanto los asuntos comerciales
          como políticos y está presente en las juntas directivas de ambas, la
          de la Fundación Mozilla y la de la Corporación Mozilla. En 2005, la
          revista Time la incluyó en su lista anual de las 100 personas más
          influyentes del mundo1​ y le ha sido otorgado el título a la "Chief
          Lizard Wrangler",1​ que se podría traducir literalmente como "persona
          que arrea el ganado", en este caso para designar a Baker como su
          directora general.
        </p>
      </article>
      <Link to={'/'}>Home</Link>
    </>
  );
}

export default MitchellBaker;
