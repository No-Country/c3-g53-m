import "./nav.css"
import navWall from "./images/nbabanner.jpg"


export function Nav() {
  return (
    
  <>
    <nav id="hamnav">

  
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
    

      <div id="hamitems">
        <a href="/">Equipos</a>
        <a href="/">Jugadores</a>
        <a href="/">Noticias</a>
        <a href="/">Contacto</a>
      </div>
    </nav>

      <div className="container-news-nav">
        <img src={navWall} alt="no-foto" />
        <div className="text-nav">
          <h3>NBA oficial fan page</h3>
          <p>Encuentra todas las noticias sobre la NBA
            y disfruta del contenido exclusivo para socios</p>
        </div>
      </div>
      
      
    
  </>
  
  );
};

