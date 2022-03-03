import React from "react";
import "./match.css"
import Wallpaper from "./images/basketball-wallpaper-preview.jpg"



export function Match() {
  return (
    

    <div className="container-match">
       <img src={Wallpaper} alt="no-foto" />
     
      <div className="container-text">
        <p className="match-text">Equipo 1 VS Equipo 2</p> 
        <p>Fecha</p>
        <p>Stadium</p>
        <p className="coca">Coca - Cola</p> 
      </div>
      
  </div>
     
          
        
          
        
  )
}