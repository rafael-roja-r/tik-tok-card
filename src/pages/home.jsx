import React , { useState } from 'react';
import User from "../img/logo.png";
import Rin from "../img/ring.svg";
import Bs from "../img/bgs.svg";
import Pr from "../img/proyect.svg";
import Hm from "../img/home.svg";
import Us from "../img/user.svg";







const Home = ()=>{

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('inicio');

    const mostrarContenido = (opcion) => {
      setOpcionSeleccionada(opcion);
    };

    return (
      <div className="home">
        <div className="home__container">
          <div className="home__nav">
            <div className="home__nav__item">
              <img src={User} alt="" />
              <h3>Home</h3>
              <img src={Rin} alt="" />
            </div>
            <div className="home_name">
              <h3>Hi josrey</h3>
              <span>Good Morning</span>
            </div>
            <div className="home__search">
              <div className="home_input">
                <img src={Bs} alt="Search" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="home__body">
            <h4>body</h4>
            {opcionSeleccionada === "inicio" && (
              <div className="inicontainer">
                <h3>Inicio</h3>
              </div>
            )}
          </div>
          <div className="home__menu">
            <div className="home__clip">
             <button onClick={() => mostrarContenido("inicio")}>
              {" "}
              <img src={Pr} alt="" />
            </button>

            <button onClick={() => mostrarContenido("inicio")}>
              {" "}
              <img src={Hm} alt="" />
            </button>
            <button onClick={() => mostrarContenido("inicio")}>
              {" "}
              <img src={Us} alt="" />
            </button>   
            </div>
            
            
          </div>
        </div>
      </div>
    );
}
export default Home;