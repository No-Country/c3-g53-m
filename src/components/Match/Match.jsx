
import React from "react";
import "./match.css"
import Wallpaper from "./images/basketball-wallpaper-preview.jpg"




export function Match() {
  return (
    

    <div className="container-match">
       <img src={Wallpaper} alt="no-foto" />
     
      <div className="container-text">
        <p className="match-text">Equipo 1 VS Equipo 2</p> 
        <p className="match-text">Fecha</p>
        <p className="match-text">Stadium</p>
        <p className="coca">Coca - Cola</p> 
        <p className="sprite">Sprite</p> 
      </div>
      
  </div>
     
          
        
          
        
  )
}