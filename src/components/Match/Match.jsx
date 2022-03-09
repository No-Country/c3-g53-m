import React, {useEffect, useState} from "react";
import "./match.css"
import Wallpaper from "./images/basketball-wallpaper-preview.jpg"


export function Match() {

  const [equipo, setEquipo] = useState(null)

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch("www.balldontlie.io/api/v1/teams")
    const users = await data.json()
    setEquipo(users)
    console.log(users)
  }


  return (
    

    <div className="container-match">
       <img src={Wallpaper} alt="no-foto" />

      <div className="container-text">
      

        <p className="match-text">Stadium</p>
        <p className="coca">Coca - Cola</p> 
        <p className="sprite">Sprite</p> 
      </div>
      
  </div>
     
          
        
          
        
  )
}