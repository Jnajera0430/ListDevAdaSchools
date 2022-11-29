import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
function Home() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/brendaneich'>
                    <label >Brendan Eich</label>
                    <div className='contenedor-img'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1024px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/mitchellbaker'}>
                    <label >Mitchell Baker</label>
                    <div className='contenedor-img'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Mitchell_Baker.jpg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/guidoVanrossum'}>
                    <label >Guido Van Rossum</label>
                    <div className='contenedor-img'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/yanzhu'}>
                    <label >Yan Zhu</label>
                    <div className='contenedor-img'>
                        <img src="https://cdn.facesofopensource.com/wp-content/uploads/2018/05/25144719/yanzhu28644-1.jpg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/markzuckerberg'}>
                    <label >Mark Zuckerberg </label>
                    <div className='contenedor-img'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="" />
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Home