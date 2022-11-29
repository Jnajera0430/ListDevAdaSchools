import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
function BrendanEich() {
  return (
    <>
      <div className='contenedor-img'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1024px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" />
      </div>
      <article>
        <h2>Brendan Eich</h2>
        <p>
          Is an American computer programmer and technology executive. He
          created the JavaScript programming language and co-founded the Mozilla
          project, the Mozilla Foundation, and the Mozilla Corporation. He
          served as the Mozilla Corporation's chief technical officer before he
          was appointed chief executive officer, but resigned shortly after his
          appointment due to controversy over his opposition to same-sex
          marriage. He subsequently became the CEO of Brave Software.
        </p>
      </article>
      <Link to={'/'}>Home</Link>
    </>
  );
}

export default BrendanEich;
