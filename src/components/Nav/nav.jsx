import "./nav.css"

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
  </>
  
  );
};

