import "./nav.css";
import navWall from "./images/nbabanner.jpg"

import {  Link } from "react-router-dom";

export function Nav() {
  return (
    
  <>
    <nav id="hamnav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      <div id="hamitems">
        <a href="#equipos">Equipos</a>
        <a href="#jugadores">Jugadores</a>
        <Link to="/noticias">Noticias</Link>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
      <div className="container-news-nav">
        <img src={navWall} alt="no-foto" />
        <div className="text-nav">
          <h3>NBA fan page</h3>
          <p>Encuentra todas las noticias sobre la NBA
            y disfruta del contenido exclusivo para socios</p>
        </div>
      </div>
  </>
  
  );
};

