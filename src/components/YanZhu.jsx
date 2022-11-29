import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
function YanZhu() {
  return (
    <>
      <div className='contenedor-img'>
        <img src="https://cdn.facesofopensource.com/wp-content/uploads/2018/05/25144719/yanzhu28644-1.jpg" />
      </div>
      <article>
        <h2>Yan Zhu</h2>
        <p>
          Yan Zhu ( chino simplificado :朱颜; chino tradicional :朱顏; pinyin :
          Zhū Yán ) es ingeniero de seguridad , autor de estándares web abiertos
          , orador tecnológico y colaborador de código abierto . [4] [5] En 2015
          fue reconocida como una de Forbes 30 Under 30 .
          <br />
          Yan Zhu es un desertor de la escuela secundaria que obtuvo una
          licenciatura en física en el MIT . [3] Se inscribió como becaria de
          investigación de posgrado de la Fundación Nacional de Ciencias en la
          Universidad de Stanford en cosmología experimental, pero se retiró
          después de cuatro meses. [4]
        </p>
      </article>
      <Link to={'/'}>Home</Link>
    </>
  );
}

export default YanZhu;
